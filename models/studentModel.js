const mongoose = require("mongoose");

const stuSchema = mongoose.Schema({
  name: {
    type: String,
  },
  clas: {
    type: String,
  },
  marks: {
    type: Number,
  },
});

const stuModel = new mongoose.model("student", stuSchema);

module.exports = { stuModel };
