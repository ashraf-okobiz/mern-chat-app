const express = require("express");
const protectRoute = require("../../middleware/protectRoute");
const {
  getMessages,
  sendMessage,
} = require("../../controllers/messageController");

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
