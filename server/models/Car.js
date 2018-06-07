const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  rate: { type: String, required: true },
  brand: { type: String, required: true },
  series: {
    type: Object,
    required: true,
    seriesName: String,
    carType: String,
    seat: Number
  },
  price: { type: Number, required: true },
  km: { type: Number, required: true },
  // colors: { type: Array, required: true },
  // engines: { type: Array, required: true },
  // seats: { type: Array, required: true },
  // carTypes: { type: Array, required: true }
  // seller: { type: String, required: true },
  // purchasedDate: { type: Date, required: true }
});

const carModel = mongoose.model("Car", carSchema);
module.exports = carModel;
