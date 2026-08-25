
const Consultation = require('../models/BookConsultation');
// const { sendNotificationEmail } = require('../config/email');

exports.createConsultation = async (req, res) => {
  try {
const consultation = await Consultation.create(req.body);
    console.log("SAVED:", consultation);

    // Send email notification (non-fatal — data is already saved to MongoDB)
    // await sendNotificationEmail({
    //   subject: 'New Book Consultation Request',
    //   title: 'New Consultation Request',
    //   fields: {
    //     "First Name": req.body.firstName,
    //     "Last Name": req.body.lastName,
    //     "Email": req.body.email,
    //     "Mobile": req.body.mobileNumber,
    //     "WhatsApp": req.body.whatsappNumber,
    //     "City": req.body.city,
    //     "Highest Qualification": req.body.highestQualification,
    //     "Language Proficiency": req.body.languageProficiency,
    //     "Language Score": req.body.languageScore,
    //     "Nearest Office": req.body.nearestOffice,
    //     "Country Preferred": req.body.countryPreferred,
    //     "Preferred Date": req.body.preferredDate
    //   }
    // });

    res.status(201).json({
      success: true,
      message: 'Consultation submitted successfully',
      data: consultation
    });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};