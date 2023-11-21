const express = require("express");
const {registerUser,loginUser,isAuthenticatedUser}=require("../Controller/auth")

const router = express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/auth").post(isAuthenticatedUser)

module.exports = router;