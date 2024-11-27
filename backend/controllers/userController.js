const User = require("../models/userModel");

module.exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "Cannot find user" });
    }

    res.status(200).json({ message: "Fetch user succesfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const userId = req.user._id;
    const users = await User.find({ _id: { $ne: userId } });

    res.status(200).json({ message: "Users fetched succesfully", users });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
