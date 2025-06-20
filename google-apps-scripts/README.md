
# Google Apps Script Automation: Calendar, Sheets, Discord Integration

This repository provides open-source automation templates using Google Apps Script. These tools help small teams or businesses schedule events, collect work reports, log data, and send alerts via Discord.

---

## 📅 Calendar Scheduler + Discord Alerts

**Trigger:** `onEdit(e)` in a Sheet (e.g., `Schedule` tab)

### 🔧 Features:
- Adds scheduled tasks to a linked Google Calendar
- Sends clean Discord notifications using webhooks
- Checks for missing info before posting
- Uses a “Posted” column to prevent duplicates

```js
// IDENTIFIER: CALENDAR_SCHEDULER
// Description: Checks inputs, creates calendar event, sends to Discord
```

---

## 🧾 Work Report Logger (Google Forms → Sheets → PDF → Drive → Discord)

**Trigger:** `onFormSubmit(e)` from linked Google Form

### 🔧 Features:
- Creates folder in Drive if it doesn’t exist
- Generates PDF summary and saves to Drive
- Logs the entry in Sheets
- Sends a Discord alert with a link to the file

```js
// IDENTIFIER: FORM_WORK_REPORT
// Description: Handles form submission, logs data, generates PDF, posts to Discord
```

---

## 🛠 Manual Entry Sheet Logger

**Trigger:** `onEdit(e)` in a sheet used for manual logging

### 🔧 Features:
- Appends formatted data to a Google Sheet
- Logs a backup in a client-named folder in Drive
- Can be used for recurring maintenance or task history

```js
// IDENTIFIER: MANUAL_REPORT_LOGGER
// Description: On manual edit, save data to Sheet and Drive
```

---

## ❗ Troubleshooting & Debugging Tips

### ✅ Common Checks
- Ensure script **triggers are active** under “Triggers” > “Current project’s triggers”
- Use `Logger.log()` to verify values
- Check folder/file permissions in Drive
- Double-check your Discord Webhook URL
- If using weather or external APIs, ensure the key is correct and usage limits are not hit

### 📷 Reporting Errors
When stuck, use:
- `View > Execution Logs` in Apps Script
- Screenshots or screen recordings (via Print Screen or Snipping Tool)
- Share clear error messages for faster debugging

---

## 📂 Recommended File Structure
```
/scripts
  calendar_scheduler.gs
  work_report_logger.gs
  manual_report_logger.gs
README.md
```

---

### 🛡️ Notes
- Make a copy of your Sheet and Form before testing in production
- Always test with dummy data
- Secure your API keys and webhook URLs

---

Built for transparency, accountability, and ease of use.
Feel free to fork, modify, and share.

© 2025 Open Workflow Tools
