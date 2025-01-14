const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDb } = require("./config/db");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");
const messageRoutes = require("./routes/message");

// Initialization
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

connectDb();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
