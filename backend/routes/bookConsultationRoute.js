const router = require("express").Router();
// const { addBookConsultation, getBookConsultations } = require("../controllers/bookConsultationController");
const { createConsultation} = require("../controllers/bookConsultationController");

// router.post("/", addBookConsultation);
// router.get("/", getBookConsultations);
router.post('/book-consultation', createConsultation);
module.exports = router;