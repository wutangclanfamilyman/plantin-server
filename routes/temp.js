const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  try {
    const temp = Math.floor(Math.random() * 101) - 50;

    res.status(200).json({
      temp: temp,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
