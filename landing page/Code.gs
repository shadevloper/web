const SHEET_ID = "1v19wlfFAdvJ4eCRfA-0bRKD6x8Z2Z-iveIRMVGyh-0s";
const SHEET_NAME = "Sheet1";

function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle("Amster Overseas | Immigration & Overseas Opportunities")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitLead(data) {
  try {
    if (!data) throw new Error("No data received.");

    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Date & Time", "Program", "Full Name", "Age",
        "Contact Number", "WhatsApp Number", "Email",
        "Occupation", "Qualification", "Work Experience",
        "Preferred European Country", "Lead Source",
        "Campaign", "Landing Page"
      ]);
      sheet.getRange(1, 1, 1, 14).setFontWeight("bold");
    }

    sheet.appendRow([
      new Date(),
      data.program || "",
      data.fullName || "",
      data.age || "",
      data.contactNumber || "",
      data.whatsappNumber || "",
      data.email || "",
      data.occupation || "",
      data.qualification || "",
      data.workExperience || "",
      data.europeCountry || "",
      data.leadSource || "",
      data.campaign || "",
      data.landingPage || ""
    ]);

    return { success: true, message: "Your application has been submitted successfully." };
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message || "Something went wrong. Please try again." };
  }
}
