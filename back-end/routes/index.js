var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");
const { check, validationResult } = require("express-validator/check");

var transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post(
  "/send",
  [
    check("name")
      .not()
      .isEmpty()
      .trim()
      .escape(),
    check("email")
      .isEmail()
      .normalizeEmail(),
    check("message")
      .not()
      .isEmpty()
      .trim()
      .escape()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var content = `name: ${name} \n email: ${email} \n message: ${message} `;

    var mail = {
      from: name,
      to: "lorehill.hello@gmail.com", //Change to email address that you want to receive messages on
      subject: "New Message from Contact Form",
      text: content
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: "fail"
        });
      } else {
        res.json({
          msg: "success"
        });
      }
    });
  }
);

module.exports = router;
