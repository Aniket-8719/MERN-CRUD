const mongoose = require("mongoose");


// create schema
const internSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// create a model
const interns = mongoose.model("interns", internSchema); 

module.exports = interns;
