const express = require("express");
const router = express.Router();

const { handleGenerateNewShortUrl, handleGetAnalytics } = require("../controllers/Url");

router.post("/", handleGenerateNewShortUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
