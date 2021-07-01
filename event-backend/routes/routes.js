const express = require("express");

const router = express.Router();
const eventCtrl = require("../controllers/eventController");
const { check } = require("express-validator");

router.post("/event",
    [
        check("firstName", "firstName is required").notEmpty(),
        check("lastName", "lastName is required").notEmpty(),
        check("email", "email is invalid").isEmail(),
        check("date", "date is required").notEmpty()
    ],
    eventCtrl.createEvent);

module.exports = router;