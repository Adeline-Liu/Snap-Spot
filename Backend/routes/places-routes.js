const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET Reuqest in Places");
  res.json({ message: "It works!" });
});

module.exports = router;
