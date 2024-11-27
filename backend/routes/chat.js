const router = require("express").Router();
const { createChat } = require("../controllers/chatController");
const auth = require("../middlewares/auth");

router.post("/create-new-chat", auth, createChat);

module.exports = router;
