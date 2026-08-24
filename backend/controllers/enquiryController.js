const Enquiry = require("../models/Enquiry");
const { sendNotificationEmail } = require("../config/email");

exports.submitEnquiry = async (req, res) => {

  try {

    console.log("BODY:", req.body);

    const enquiry = await Enquiry.create(req.body);

    console.log("SAVED:", enquiry);

    // Send email notification (non-fatal — data is already saved to MongoDB)
    await sendNotificationEmail({
      subject: "New Website Enquiry",
      title: "New Enquiry",
      fields: {
        "Name": req.body.name,
        "Email": req.body.email,
        "Phone": req.body.phone,
        "Country": req.body.country,
        "Message": req.body.message
      }
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

