const Mock = require("mockjs");
const fs = require("fs");

const Random = Mock.Random;

const brandAndSeries = {
  BMW: {
    initialLetter: "B",
    country: "Germany",
    series: [
      {
        seriesName: "320i",
        carType: "compact",
        seat: 5
      },
      {
        seriesName: "X3",
        carType: "SUV",
        seat: 5
      },
      {
        seriesName: "X5",
        carType: "SUV",
        seat: 5
      }
    ]
  },
  "Mercedes-Benz": {
    initialLetter: "M",
    country: "Germany",
    series: [
      {
        seriesName: "C",
        carType: "compact",
        seat: 5
      },
      {
        seriesName: "E",
        carType: "compact",
        seat: 5
      },
      {
        seriesName: "GLA",
        carType: "SUV",
        seat: 7
      }
    ]
  }
};

let data = Mock.mock({
  "list|1000": [
    {
      "id|+1": 100000,
      "rate|1-5": "★",
      "brand|1": Object.keys(brandAndSeries),
      series: function() {
        let arr = brandAndSeries[this.brand].series;
        return arr[Random.integer(0, arr.length - 1)];
      },
      price: function() {
        return Random.integer(0, 200000);
      },
      km: function() {
        return Random.integer(0, 500000);
      },
      "color|1": ["blue", "gray", "red", "silver", "white"],
      "engine|1": ["1.2", "1.4", "1.6", "1.8", "2.0T", "2.4T", "2.8T", "3.6T"]

      // "seats|1" : ["5 seats", "7 seats", "8 seats", "9 seats"],
      // "carTypes|1" :["SUV", "compact", "economic", "mid-size"],
    }
  ]
});

fs.writeFile("./result.json", JSON.stringify(data), err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`write successfully`);
  }
});
