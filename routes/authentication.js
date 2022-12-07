// Create routes for the application

const express = require("express");
const AuthenticationController = require("../controllers/authentication.controller");
const router = express.Router();

router.post("/signin", AuthenticationController.signin);
router.post("/signup", AuthenticationController.signup);

module.exports = router;
