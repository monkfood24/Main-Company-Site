// ════════════════════════════════════════════════════════════════
// J.P. NADAR — Google Apps Script (paste into Google Apps Script)
// This saves contact form submissions to Google Sheets
// ════════════════════════════════════════════════════════════════
//
// SETUP INSTRUCTIONS:
// 1. Go to: https://sheets.google.com → Create a new spreadsheet
//    Name it: "JP Nadar Enquiries"
//    Add these headers in Row 1:
//    Timestamp | Name | Email | Phone | Service | Message
//
// 2. Go to: https://script.google.com → New Project
//    Paste ALL the code below
//    Replace SPREADSHEET_ID with your sheet's ID (from the URL)
//
// 3. Click Deploy → New Deployment → Web App
//    Execute as: Me
//    Who has access: Anyone
//    Click Deploy → Copy the Web App URL
//
// 4. In index.html, replace:
//    const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
//    with your actual Web App URL
//
// ════════════════════════════════════════════════════════════════

const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // ← Replace this

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch(err) {
      data = {
        name: e.parameter.name || '',
        email: e.parameter.email || '',
        phone: e.parameter.phone || '',
        service: e.parameter.service || '',
        message: e.parameter.message || '',
        timestamp: new Date().toISOString()
      };
    }
    
    sheet.appendRow([
      new Date(data.timestamp || new Date()),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.message || ''
    ]);
    
    // Optional: Send email notification
    sendEmailNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('J.P. Nadar Form API is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function sendEmailNotification(data) {
  const recipientEmail = 'hello@jpnadar.com'; // ← Change to your email
  
  const subject = `New Enquiry from ${data.name} — ${data.service}`;
  const body = `
New enquiry received on J.P. Nadar website:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Message: ${data.message}
Time: ${data.timestamp}

---
Reply to: ${data.email}
  `.trim();
  
  try {
    GmailApp.sendEmail(recipientEmail, subject, body);
  } catch(err) {
    console.log('Email notification failed:', err);
  }
}
