const webpack = require("webpack")

const pkg = require("./package.json")

const nodeEnv = process.env.NODE_ENV || "development"
const isProd = nodeEnv === "production"

const serverDeps = [
  "larvitbase",
  "larvitfs",
  "larviturltopdf",
  "winston",
  "winston-daily-rotate-file",
]

const vendor = Object.keys(pkg.dependencies)
                .filter(v => serverDeps.indexOf(v) === -1)

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "vendor.js",
  }),
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify(nodeEnv),
    },
  }),
]

if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  )
}

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
  plugins: plugins,
}
