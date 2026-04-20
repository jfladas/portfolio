import base64
import json
import os
import sys

import requests

TOKEN_URL = "https://accounts.spotify.com/api/token"
CURRENTLY_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing"
RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1"
REQUEST_TIMEOUT_SECONDS = 15
REQUIRED_ENV_VARS = ("SPOTIFY_CLIENT_ID", "SPOTIFY_CLIENT_SECRET", "SPOTIFY_REFRESH_TOKEN")
BODY_SNIPPET_LENGTH = 250


class SpotifyFetchError(RuntimeError):
    pass


def _body_snippet(response):
    text = (response.text or "").strip().replace("\n", " ")
    return text[:BODY_SNIPPET_LENGTH] if text else "<empty>"


def _require_env_vars():
    missing = [name for name in REQUIRED_ENV_VARS if not os.getenv(name)]
    if missing:
        raise SpotifyFetchError(f"Missing required environment variables: {', '.join(missing)}")
    return tuple(os.environ[name] for name in REQUIRED_ENV_VARS)


def _request(method, url, label, **kwargs):
    try:
        return requests.request(method, url, timeout=REQUEST_TIMEOUT_SECONDS, **kwargs)
    except requests.RequestException as exc:
        raise SpotifyFetchError(f"{label} failed: request error: {exc}") from exc


def _json_or_error(response, label):
    if not response.ok:
        raise SpotifyFetchError(
            f"{label} failed: HTTP {response.status_code}. Response body: {_body_snippet(response)}"
        )

    if not (response.text or "").strip():
        raise SpotifyFetchError(
            f"{label} failed: HTTP {response.status_code} with empty response body."
        )

    try:
        return response.json()
    except ValueError as exc:
        raise SpotifyFetchError(
            f"{label} failed: HTTP {response.status_code} returned non-JSON. "
            f"Response body: {_body_snippet(response)}"
        ) from exc


def _track_payload(item, status):
    artists = item.get("artists") or []
    images = (item.get("album") or {}).get("images") or []
    return {
        "status": status,
        "item": {
            "name": item.get("name"),
            "artist": artists[0].get("name") if artists else None,
            "link": (item.get("external_urls") or {}).get("spotify"),
            "album_art": images[0].get("url") if images else None,
        },
    }


def get_access_token(client_id, client_secret, refresh_token):
    auth_string = f"{client_id}:{client_secret}"
    auth_base64 = base64.b64encode(auth_string.encode("utf-8")).decode("utf-8")
    headers = {
        "Authorization": f"Basic {auth_base64}",
        "Content-Type": "application/x-www-form-urlencoded",
    }
    data = {"grant_type": "refresh_token", "refresh_token": refresh_token}

    response = _request("POST", TOKEN_URL, "Token refresh request", headers=headers, data=data)
    token_data = _json_or_error(response, "Token refresh request")
    token = token_data.get("access_token")
    if not token:
        raise SpotifyFetchError(
            f"Token refresh request failed: missing access_token in response. Body: {_body_snippet(response)}"
        )
    return token


def get_recent(headers):
    recent_resp = _request("GET", RECENTLY_PLAYED_URL, "Recently played request", headers=headers)
    recent_data = _json_or_error(recent_resp, "Recently played request")
    items = recent_data.get("items") or []
    if not items or not items[0].get("track"):
        return {"status": "offline", "item": None}
    return _track_payload(items[0]["track"], "offline")


def fetch_spotify_data():
    client_id, client_secret, refresh_token = _require_env_vars()
    token = get_access_token(client_id, client_secret, refresh_token)
    headers = {"Authorization": f"Bearer {token}"}

    curr_resp = _request("GET", CURRENTLY_PLAYING_URL, "Currently playing request", headers=headers)
    if curr_resp.status_code == 204:
        return get_recent(headers)

    curr_data = _json_or_error(curr_resp, "Currently playing request")
    if curr_data.get("is_playing") and curr_data.get("item"):
        return _track_payload(curr_data["item"], "online")

    return get_recent(headers)


def run_self_check():
    class DummyResponse:
        def __init__(self, status_code, text, ok=True):
            self.status_code = status_code
            self.text = text
            self.ok = ok

        def json(self):
            return json.loads(self.text)

    assert _json_or_error(DummyResponse(200, '{"ok": true}'), "Self-check") == {"ok": True}
    try:
        _json_or_error(DummyResponse(200, ""), "Self-check")
    except SpotifyFetchError:
        pass
    else:
        raise AssertionError("Expected error on empty response body")
    print("Self-check passed.")


def main():
    if "--self-check" in sys.argv:
        run_self_check()
        return

    # Check if a specific output path was provided (like 'deployment/spotify.json')
    # Otherwise, default to 'spotify.json'
    output_file = sys.argv[1] if len(sys.argv) > 1 else "spotify.json"

    final_data = fetch_spotify_data()
    
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(final_data, f, indent=4)
    
    print(f"Success: {output_file} updated.")



if __name__ == "__main__":
    try:
        main()
    except SpotifyFetchError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc
