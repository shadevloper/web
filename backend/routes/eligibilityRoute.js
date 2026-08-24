const router = require("express").Router();

const {
  sendEligibility
} = require("../controllers/eligibiltyController");

router.post("/", sendEligibility);

module.exports = router;