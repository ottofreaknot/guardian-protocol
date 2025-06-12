function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var time = data.time || "No time provided";
    var location = data.location || "No location provided";

    var message = `🚨 Guardian Alert Triggered 🚨\nTime: ⏳ ${time}\nLocation: 📍 ${location}`;

    var webhookUrl = "INPUT DISCORD WEBHOOK IN HERE"; 

    var options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({
        content: message
      })
    };

    UrlFetchApp.fetch(webhookUrl, options);

    return ContentService.createTextOutput("Posted to Discord.");
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.message);
  }
}