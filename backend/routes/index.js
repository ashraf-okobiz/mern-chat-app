const express = require("express");
const apiRoutes = require("./api");
const baseURL = process.env.BASE_URL;

const router = express.Router();

router.use(baseURL, apiRoutes);

module.exports = router;
