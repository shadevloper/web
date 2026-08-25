const Eligibility = require("../models/Eligibility");
// const { sendNotificationEmail } = require("../config/email");

exports.sendEligibility = async (req, res) => {

  try {

    console.log("BODY:", req.body);

    const eligibility = await Eligibility.create(req.body);

    console.log("SAVED:", eligibility);

    // Send email notification (non-fatal — data is already saved to MongoDB)
    // await sendNotificationEmail({
    //   subject: "New Eligibility Assessment Request",
    //   title: "New Eligibility Assessment",
    //   fields: {
    //     "Full Name": req.body.fullName,
    //     "Email": req.body.email,
    //     "Phone": req.body.phone,
    //     "Destination Country": req.body.destination_country,
    //     "Qualification": req.body.qualification,
    //     "Work Experience": req.body.work_experience,
    //     "IELTS Score": req.body.IELTS_score
    //   }
    // });

    res.status(201).json({
      success: true,
      message: "Eligibility submitted successfully",
      data: eligibility
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
