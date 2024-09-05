const express = require("express");
const authRoutes = require("./authRoute");
const userRoutes = require("./userRoute");
const messageRoutes = require("./messageRoute");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
