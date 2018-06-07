const express = require("express");
const carRouter = express.Router();
const formidable = require("formidable");
const Car = require("../models/Car");

carRouter.post("/carList", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields) => {
    if (err) {
      console.error(err);
    } else {
      const { filters } = fields;
      let keys = [];
      let values = [];
      let condition = {};
      filters.forEach((filter, index) => {
        keys.push(filter.keyValue);
        values.push(filter.value);
      });
      for (let i = 0; i < keys.length; i++) {
        condition[keys[i]] = values[i];
      }
      const { price } = condition;
      console.log(price);
      Car.find({ price: { $gte: price[0], $lte: price[1] } }, (err, cars) => {
        if (err) {
          return console.log(err);
        } else {
          return res.json({ code: 0, data: cars });
        }
      });
    }
  });
});

module.exports = carRouter;
