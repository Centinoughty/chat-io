const Chat = require("../models/chatModel");

module.exports.createChat = async (req, res) => {
  try {
    const userId = req.user._id;
    const chat = new Chat(req.body);
    const savedChat = await chat.save();

    res
      .status(201)
      .json({ message: "Chat created succesfully", chat: savedChat });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error)
  }
};
