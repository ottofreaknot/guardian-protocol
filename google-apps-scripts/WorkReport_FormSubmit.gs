const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE"; // 🔁 Replace with your Discord webhook
const DESTINATION_FOLDER_ID = "YOUR_GOOGLE_DRIVE_FOLDER_ID"; // 🔁 Replace with your Drive folder ID
const SHEET_NAME = "WorkReports"; // Match this to your Google Sheet tab name

function onFormSubmit(e) {
  try {
    if (!e || !e.namedValues) {
      Logger.log("❌ Trigger ran but no event object or namedValues found");
      return;
    }

    Logger.log("✅ FORM SUBMITTED");
    Logger.log(JSON.stringify(e.namedValues, null, 2));

    const named = e.namedValues;
    const name = named["Name"]?.[0] || "Unknown";
    const location = named["Location"]?.[0] || "";
    const taskComplete = named["Tasks Completed"]?.[0] || "";
    const nextTasks = named["Tasks for Next Visit"]?.[0] || "";
    const labor = named["Labor"]?.[0] || "";
    const notes = named["Notes"]?.[0] || "";

    const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");
    const safeDate = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd");

    // 📄 Create PDF
    const doc = DocumentApp.create(`Work Report - ${name} - ${safeDate}`);
    const body = doc.getBody();
    body.appendParagraph(`📅 Date: ${safeDate}`);
    body.appendParagraph(`👤 Name: ${name}`);
    body.appendParagraph(`📍 Location: ${location}`);
    body.appendParagraph(`✅ Tasks Completed: ${taskComplete}`);
    body.appendParagraph(`📝 Tasks for Next Visit: ${nextTasks}`);
    body.appendParagraph(`💪 Labor: ${labor}`);
    body.appendParagraph(`🗒 Notes: ${notes}`);
    body.appendParagraph(`⏱ Submitted: ${timestamp}`);
    doc.saveAndClose();

    const pdf = DriveApp.getFileById(doc.getId()).getAs(MimeType.PDF);
    const folder = DriveApp.getFolderById(DESTINATION_FOLDER_ID);
    const newFile = folder.createFile(pdf);
    newFile.setName(`Work Report - ${name} - ${safeDate}.pdf`);
    const fileUrl = newFile.getUrl();

    // 📊 Append to Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (sheet) {
      sheet.appendRow([safeDate, name, location, taskComplete, nextTasks, labor, notes, timestamp, fileUrl, 'No']);
    } else {
      Logger.log("❌ Sheet not found: " + SHEET_NAME);
    }

    // 📢 Send to Discord
    const message = {
      content: `**📜 New Work Report Submitted**\n\n👤 *Name:* ${name}\n📍 *Location:* ${location}\n📅 *Date:* ${safeDate}\n✅ *Tasks Completed:* ${taskComplete}\n📝 *Next Visit:* ${nextTasks}\n💪 *Labor:* ${labor}\n⏱ *Submitted:* ${timestamp}\n📄 [View PDF Report](${fileUrl})`
    };

    const response = UrlFetchApp.fetch(DISCORD_WEBHOOK_URL, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(message)
    });

    Logger.log("📨 Discord Response Code: " + response.getResponseCode());
  } catch (err) {
    Logger.log("❌ Script Error: " + err.message);
  }
}
