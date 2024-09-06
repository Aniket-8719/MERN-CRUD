const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const interRoute = require("./routes/interRoute");
dotenv.config();

const app = express();
app.use(express.json());


 

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 8080,  '0.0.0.0',(err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT  || 3000}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect", error);
  }); 

app.use("/api/interns", interRoute);
