const nodemailer = require("nodemailer");

// Reusable transporter for sending notification emails (Zoho SMTP / Gmail)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.zoho.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === "false" ? false : true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Build a simple HTML table from a flat object of key/value pairs
const buildTable = (fields) => {
  const rows = Object.entries(fields)
    .filter(([key, val]) => val !== undefined && val !== null && val !== "")
    .map(
      ([key, val]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;width:180px;">${key}</td><td style="padding:8px 12px;border:1px solid #ddd;">${val}</td></tr>`
    )
    .join("");
  return `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">${rows}</table>`;
};

// Send a notification email with the submitted data.
// Non-fatal: if email fails, the caller still has the data saved in MongoDB.
async function sendNotificationEmail({ subject, title, fields }) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFY_EMAIL || "contact@amsteroverseas.in",
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;">
          <div style="background:#1a3a6b;color:#fff;padding:16px 20px;border-radius:6px 6px 0 0;">
            <h2 style="margin:0;">${title}</h2>
          </div>
          <div style="border:1px solid #ddd;border-top:none;padding:20px;border-radius:0 0 6px 6px;">
            ${buildTable(fields)}
            <p style="margin-top:20px;color:#888;font-size:12px;">
              This is an automated notification sent from the AMSTER website.
            </p>
          </div>
        </div>
      `
    });
    console.log("NOTIFICATION EMAIL SENT:", subject);
    return true;
  } catch (emailError) {
    console.log("NOTIFICATION EMAIL FAILED (data still saved):", emailError.message);
    return false;
  }
}

module.exports = { sendNotificationEmail };
