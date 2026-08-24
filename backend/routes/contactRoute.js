const router = require("express").Router();
const { addContact, getContacts } = require("../controllers/contactController");
const {
  submitContactForm
} = require("../controllers/contactController");

router.post("/contact", submitContactForm);

module.exports = router;