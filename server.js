const express = require("express");
const dotenv = require("dotenv");

//oad env files
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server riuning in ${process.env.NODE_ENV} and port ${PORT}`)
);
