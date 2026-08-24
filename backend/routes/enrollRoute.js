const router = require("express").Router();

const {
  addEnroll,
  getEnrolls
} = require("../controllers/enrollController");

router.post("/", addEnroll);

router.get("/", getEnrolls);

module.exports = router;