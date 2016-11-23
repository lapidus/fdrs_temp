const webpack = require("webpack")

const pkg = require("./package.json")

const serverDeps = [ "larvitbase", "larvitfs", "larviturltopdf", "winston", "winston-daily-rotate-file" ]
const vendor = Object.keys(pkg.dependencies)
                .filter(v => serverDeps.indexOf(v) === -1)

module.exports = {
  entry: {
    app: "./client/index",
    vendor: vendor,
  },
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "app.js",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */"vendor",
      /* filename= */"vendor.js"
    ),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
      },
    }),
  ],
  stats: {
    warngings: false,
  },
}
