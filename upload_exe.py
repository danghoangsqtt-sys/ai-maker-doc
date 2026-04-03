import requests

print("Getting GoFile server...")
try:
    res = requests.get("https://api.gofile.io/servers").json()
    server = res["data"]["servers"][0]["name"]
    print(f"Uploading Setup ZIP to {server}...")
    
    files = {'file': open(r"release\AI E-Learning-0.0.0-win.zip", 'rb')}
    r = requests.post(f"https://{server}.gofile.io/contents/uploadfile", files=files)
    data = r.json()
    
    if data["status"] == "ok":
        print("SUCCESS! Link:")
        print(data["data"]["downloadPage"])
    else:
        print("Failed:", data)
except Exception as e:
    print("Error:", e)
