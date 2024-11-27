const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chats",
  },
  sentBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  text: {
    type: String,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("messages", MessageSchema);
