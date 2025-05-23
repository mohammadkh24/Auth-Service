const express = require("express");
const controller = require("../controllers/auth");
const { otpVerifyValidator, sentOtpValidator } = require("../validators/auth");
const validate = require("../middlewares/validate");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.route("/send").post(sentOtpValidator, validate, controller.send);
router.route("/verify").post(otpVerifyValidator, controller.verify);
router.route("/me").get(auth, controller.getMe);

module.exports = router;
