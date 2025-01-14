const { generateToken } = require("../config/utils");
const User = require("../models/user.model");

module.exports.registerRoute = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // verify the credentials

    // find the user
    const existingUser = await User.findOne({ $or: [{ email, username }] });
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username already exists" });
      } else if (existingUser.email === email) {
        return res
          .status(400)
          .json({ message: "Email has already been registed" });
      }
    }

    const newUser = new User({ username, email, password });

    if (newUser) {
      const token = generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({ message: "User logged in" });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
