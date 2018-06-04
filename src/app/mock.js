const Mock = require("mockjs");
const fs = require("fs");
const path = require("path");
const Random = Mock.Random;

const data = Mock.mock({
  "ipList|100": [
    {
      id: function() {
        return Random.ip();
      }
    }
  ]
});

fs.writeFile(
  path.resolve(__dirname, "../../src/app/result.json"),
  JSON.stringify(data, null, 4),
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`write file successfully`);
    }
  }
);
