const router = require("express").Router();
const { createChat, getAllChats } = require("../controllers/chatController");
const auth = require("../middlewares/auth");

router.post("/create-new-chat", auth, createChat);
router.get("/get-all-chats", auth, getAllChats);

module.exports = router;
