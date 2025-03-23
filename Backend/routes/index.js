const express = require("express")
const feedback = require("../Controller/feedback")

const router = express.Router()

router.post("/feedback", feedback)

module.exports = router