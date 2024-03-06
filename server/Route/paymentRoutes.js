const express = require("express");
const router = express.Router();
const paymentController = require("../Controllers/paymentController");

router.post("/checkout", paymentController.checkout);

module.exports = router;
