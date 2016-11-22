const webpack = require("webpack")

module.exports = {
  entry: "./client/index",
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "client.js",
  },
  // devtool: "source-map",
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
      },
    }),
  ],
}
