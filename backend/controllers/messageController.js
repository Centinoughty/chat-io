const Message = require("../models/messageModel");
const Chat = require("../models/chatModel");

module.exports.newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();

    const currentChat = Chat.findById(req.body.chatId);
    currentChat.lastMessage = savedMessage.text;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
