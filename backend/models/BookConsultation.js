const mongoose = require("mongoose");

const bookConsultationSchema = new mongoose.Schema({
    firstName: { type: String,required: true},
    lastName: { type: String,required: true},  
    mobileNumber: {type: String,required: true},
    whatsapPhone:  String,
    email: {type: String,required: true},
      city: String,
  highestQualification: String,
  languageProficiency: String,
  languageScore: String,
  nearestOffice: String,
  countryPreferred: String,
  preferredDate: String,
  createdAt: {
    type: Date,
    default: Date.now
  }

});


module.exports = mongoose.model("BookConsultation", bookConsultationSchema);
