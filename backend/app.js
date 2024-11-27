const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDb } = require("./config/db");
const authRoutes = require("./routes/auth");

// Initialization
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

connectDb();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
