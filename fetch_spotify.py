import os, requests, json, base64

CLIENT_ID = os.environ['SPOTIFY_CLIENT_ID']
CLIENT_SECRET = os.environ['SPOTIFY_CLIENT_SECRET']
REFRESH_TOKEN = os.environ['SPOTIFY_REFRESH_TOKEN']

# Get fresh access token
auth_header = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode()).decode()
token_resp = requests.post("https://spotify.com", 
    headers={"Authorization": f"Basic {auth_header}"},
    data={"grant_type": "refresh_token", "refresh_token": REFRESH_TOKEN})
access_token = token_resp.json()["access_token"]
headers = {"Authorization": f"Bearer {access_token}"}

# 1. Try "Currently Playing"
curr = requests.get("https://spotify.com", headers=headers)

if curr.status_code == 200 and curr.json().get('is_playing'):
    data = {"status": "online", "item": curr.json()['item']}
else:
    # 2. Fallback to "Recently Played"
    recent = requests.get("https://spotify.com", headers=headers)
    data = {"status": "offline", "item": recent.json()['items'][0]['track']}

with open("spotify.json", "w") as f:
    json.dump(data, f)
