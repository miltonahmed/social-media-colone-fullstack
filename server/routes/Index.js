const express = require("express")
const router = express.Router()


router.get("/", () => {
  console.log('This is from api route')
})

module.exports= router