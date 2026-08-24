const Contact = require("../models/Contact");
const { sendNotificationEmail } = require("../config/email");

exports.submitContactForm = async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const savedData = await Contact.create(req.body
    //   {
    //   fullName: req.body.fullName,
    //   email: req.body.email,
    //   phoneNumber: req.body.phoneNumber,
    //   interestedCountry: req.body.interestedCountry,
    //   serviceRequired: req.body.serviceRequired,
    //   message: req.body.message
    // }
    );
console.log("DATA SAVED:", savedData);

    // Send email notification (non-fatal — data is already saved to MongoDB)
    await sendNotificationEmail({
      subject: "New Contact Form Submission",
      title: "New Contact Enquiry",
      fields: {
        "Full Name": req.body.fullName,
        "Email": req.body.email,
        "Phone": req.body.phoneNumber,
        "Interested Country": req.body.interestedCountry,
        "Service Required": req.body.serviceRequired,
        "Message": req.body.message
      }
    });

    res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      data: savedData
    });

  } catch (error) {
    console.log("FULL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
