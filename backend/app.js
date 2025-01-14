const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/auth.route");
const { connectDb } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/auth", authRoutes);

connectDb();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
