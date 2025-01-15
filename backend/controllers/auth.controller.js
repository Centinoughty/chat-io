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

module.exports.loginRoute = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    if (!(await user.isPasswordMatch(password))) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = generateToken(user._id, res);

    res.status(200).json({ message: "Login success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.logoutRoute = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
