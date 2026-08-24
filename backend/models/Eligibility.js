const mongoose = require("mongoose");

const eligibilitySchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  destination_country: {
    type: String,
    required: true
  },

  qualification: {
    type: String,
    required: true
  },

  work_experience: {
    type: String,
    required: true
  },

  IELTS_score: {
    type: Number,
    required: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Eligibility",
  eligibilitySchema
);  