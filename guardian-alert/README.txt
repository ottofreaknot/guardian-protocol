# 🛡️ Guardian Alert – Public Shortcut Setup (Prototype)

📍 Real-time location alerts • 🔁 Open-source • No login required

---

## ✅ Google Apps Script Setup

Use the included `guardian_alert.gs` script.

### How to Deploy:
1. Go to [script.google.com](https://script.google.com)
2. Start a new project
3. Paste in the contents of `guardian_alert.gs`
4. Deploy as Web App:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the URL for use in your iOS Shortcut

---

## ⚙️ iOS Shortcut Setup Instructions

1. Get current location  
2. Set variable `Location` = Current Location  
3. Get current date → format date  
4. Set variable `Time` = Formatted Date  
5. Get contents of URL  
   - Method: POST  
   - Request Body: JSON  
     - `time`: `Time`  
     - `location`: `Location`  
     - `webhook`: `"https://discord.com/api/webhooks/PUT-YOUR-URL-HERE"`

---

## 🌐 How to Create a Discord Webhook

1. Open Discord server
2. Go to Server Settings → Integrations → Webhooks
3. Create new Webhook, select channel, copy URL
4. Paste that into your Shortcut in the `webhook` field

---

## 👆 Enable Triple Tap Trigger (iPhone)

1. Settings → Accessibility → Touch → Back Tap  
2. Choose Triple Tap  
3. Select this Shortcut

---

## ⚠️ Prototype Disclaimer

> **Guardian Protocol – Public Prototype**  
> This is an open-source alert system for location, time, and signal relay.  
> - 🔓 Use at your own risk  
> - 🌐 You must supply your own webhook  
> - 🧭 No data is logged by developer  
> - 🧬 Use ethically and follow local laws

Guardian Protocol is not responsible for misuse.