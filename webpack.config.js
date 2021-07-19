// path is from node js
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    // in node js  __ is constant in node js and reference for current working directory
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  }
};

module.exports = config;
