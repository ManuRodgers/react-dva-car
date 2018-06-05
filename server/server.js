const express = require("express");
const path = require("path");
const fs = require("fs");
const parseurl = require("parseurl");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo");

const app = express();

app.get("/", (req, res) => {
  console.log(parseurl(req));
  res.send(`you suck`);
});

// todoRouter
app.get("/api", (req, res) => {
  let returnJSON = {};

  fs.readdir(path.resolve(__dirname, "../src/images/Corolla/"), (err, data) => {
    if (err) {
      console.error(err);
    } else {
      data.forEach(color => {
        returnJSON[color] = {};

        let colorData = fs.readdirSync(
          path.resolve(__dirname, "../src/images/Corolla/" + color)
        );
        colorData.forEach(album => {
          let albumData = fs.readdirSync(
            path.resolve(__dirname, `../src/images/Corolla/${color}/${album}`)
          );

          returnJSON[color][album] = albumData;
        });
      });
    }

    return res.json({ results: returnJSON });
  });
});

// static
app.use(express.static(path.resolve(__dirname, "../src")));

// http server listening on 8888
app.listen(8888, () => {
  console.log(`node server is running on port:8888`);
});
