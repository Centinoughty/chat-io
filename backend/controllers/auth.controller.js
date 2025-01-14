module.exports.registerRoute = async (req, res) => {
  try {
    const { username, email, password } = req.body;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
