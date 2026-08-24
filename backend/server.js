const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use("/api", require("./routes/contactRoute"));
app.use('/api', require('./routes/bookConsultationRoute'));
app.use("/api/enroll", require("./routes/enrollRoute"));
app.use("/api/eligibility",require("./routes/eligibilityRoute"));
app.use("/api", require("./routes/enquiryRoute"));


// DB Connect
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));




