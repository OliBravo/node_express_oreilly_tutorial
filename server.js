const express = require("express");
const dotenv = require("dotenv");

//Route files
const bootcamps = require("./routes/bootcamps");

//oad env files
dotenv.config({ path: "./config/config.env" });

const app = express();

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server riuning in ${process.env.NODE_ENV} and port ${PORT}`)
);
