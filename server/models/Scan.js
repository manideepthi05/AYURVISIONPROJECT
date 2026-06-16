const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  plantName: String,
  confidence: String,
  scanDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Scan", scanSchema);