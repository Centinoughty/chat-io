const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const JWT_TOKEN = process.env.JWT_TOKEN;

module.exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    if (!firstName || !email || !password) {
      return res.status(400).json({ message: "Incomplete fields" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    res.status(201).json({ message: "Created account" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Account not found" });
    }

    if (!(await user.isMatchPassword(password))) {
      return res.status(403).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ _id: user._id }, JWT_TOKEN, { expiresIn: "1d" });

    res.status(200).json({ message: "Login succesful", token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error)
  }
};
