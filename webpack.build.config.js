const webpack = require("webpack")

const config = require("./webpack.config")

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production"),
    },
  })
)

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({ minimize: true })
)

module.exports = config