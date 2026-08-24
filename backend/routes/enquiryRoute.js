const router = require("express").Router();

const {
  submitEnquiry
} = require("../controllers/enquiryController");

router.post("/enquiry", submitEnquiry);

module.exports = router;

