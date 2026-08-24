const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema({

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

  score: {
    type: String,
    required: true
  },

  batch: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Enroll", enrollSchema);