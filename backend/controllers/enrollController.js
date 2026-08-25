const Enroll = require("../models/Enroll");
// const { sendNotificationEmail } = require("../config/email");

exports.addEnroll = async (req, res) => {

  try {

    console.log("BODY:", req.body);

    const enroll = await Enroll.create(req.body);

    console.log("SAVED:", enroll);

    // Send email notification (non-fatal — data is already saved to MongoDB)
    // await sendNotificationEmail({
    //   subject: "New IELTS Enrollment Request",
    //   title: "New IELTS Training Enrollment",
    //   fields: {
    //     "Full Name": req.body.fullName,
    //     "Email": req.body.email,
    //     "Phone": req.body.phone,
    //     "Target Band Score": req.body.score,
    //     "Preferred Batch": req.body.batch
    //   }
    // });

    res.status(201).json({
      success: true,
      message: "Enrollment submitted successfully",
      data: enroll
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getEnrolls = async (req, res) => {

  try {

    const data = await Enroll.find();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};