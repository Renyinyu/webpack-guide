const path = require("path");

function resolve(relativePath) {
  return path.resolve(__dirname, relativePath);
}

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "[name].js",
    path: resolve("dist")
  }
};
