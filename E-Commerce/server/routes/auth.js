const express = require('express');
const { handleLogin, handleRegister , HandleLogout , getUserProfile } = require('../controllers/auth');
const auth = require("../middlewares/authMiddleware")

const router = express.Router()

router.post("/login" , handleLogin)

router.post("/register" , handleRegister)

router.post("/logout", auth , HandleLogout)

router.get("/profile" , auth , getUserProfile)

module.exports = router;