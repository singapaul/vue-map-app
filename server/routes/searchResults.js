const express = require("express");
const router = express.Router();
const axios = require("axios");
const url = require("url");

router.get("/:query", async (req, res) => {
  try {
    // add API key and query strings
    const params = new URLSearchParams({
      access_token: process.env.API_KEY,
      ...url.parse(req.url, true).query,
    });
    console.log(params);
    const query = req.params.query;
    const results = await axios(
      // I had to change https to http ??
      `http://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?${params}`
    );
    const data = results.data;
    console.log(results.data);
    s;
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
