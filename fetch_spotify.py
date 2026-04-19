import os, requests, json, base64

# 1. Load Secrets
CLIENT_ID = os.environ.get('SPOTIFY_CLIENT_ID')
CLIENT_SECRET = os.environ.get('SPOTIFY_CLIENT_SECRET')
REFRESH_TOKEN = os.environ.get('SPOTIFY_REFRESH_TOKEN')

def get_access_token():
    auth_string = f"{CLIENT_ID}:{CLIENT_SECRET}"
    auth_base64 = base64.b64encode(auth_string.encode('utf-8')).decode('utf-8')
    
    url = "https://spotify.com"
    headers = {
        "Authorization": f"Basic {auth_base64}",
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {
        "grant_type": "refresh_token",
        "refresh_token": REFRESH_TOKEN
    }
    
    response = requests.post(url, headers=headers, data=data)
    if response.status_code != 200:
        print(f"Auth Failed: {response.status_code} {response.text}")
        exit(1)
    return response.json()["access_token"]

def main():
    token = get_access_token()
    headers = {"Authorization": f"Bearer {token}"}

    # 2. Try Currently Playing
    curr_url = "https://spotify.com"
    curr_resp = requests.get(curr_url, headers=headers)

    # 3. Process Data
    if curr_resp.status_code == 200 and curr_resp.text:
        curr_data = curr_resp.json()
        if curr_data.get('is_playing'):
            # Grab track info
            item = curr_data['item']
            final_data = {
                "status": "online",
                "item": {
                    "name": item['name'],
                    "artist": item['artists'][0]['name'],
                    "link": item['external_urls']['spotify'],
                    "album_art": item['album']['images'][0]['url']
                }
            }
        else:
            final_data = get_recent(headers)
    else:
        final_data = get_recent(headers)

    # 4. Save to JSON
    with open("spotify.json", "w") as f:
        json.dump(final_data, f, indent=4)
    print("Success: spotify.json updated.")

def get_recent(headers):
    # Fallback to Recently Played
    recent_url = "https://spotify.com"
    recent_resp = requests.get(recent_url, headers=headers)
    
    if recent_resp.status_code != 200:
        return {"status": "error", "message": "Could not fetch data"}
    
    recent_data = recent_resp.json()
    item = recent_data['items'][0]['track']
    return {
        "status": "offline",
        "item": {
            "name": item['name'],
            "artist": item['artists'][0]['name'],
            "link": item['external_urls']['spotify'],
            "album_art": item['album']['images'][0]['url']
        }
    }

if __name__ == "__main__":
    main()
