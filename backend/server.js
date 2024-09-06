const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const interRoute = require("./routes/interRoute");
dotenv.config();

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({
  origin: `${process.env.FRONTEND_URL}`,  // Fixed 'origin' typo
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}));

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to the database successfully");
    app.listen(process.env.PORT || 8080, '0.0.0.0', (err) => {
      if (err) {
        console.log("Error starting server:", err);
      } else {
        console.log(`Server running at port ${process.env.PORT || 8080}`);
      }
    });
  })
  .catch((error) => {
    console.log("Failed to connect to the database", error);
  });


app.use("/api/interns", interRoute);
