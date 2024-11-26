const express = require("express");
require("dotenv").config();
const { connectDb } = require("./config/db");

// Initialization
const app = express();
const PORT = process.env.PORT || 5000;

connectDb();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
