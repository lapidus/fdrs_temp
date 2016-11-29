const path = require("path")

const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin")

const pkg = require("./package.json")

const nodeEnv = process.env.NODE_ENV || "development"
const isProd = nodeEnv === "production"
const filename = isProd ? "[name].[chunkhash].js" : "[name].js"

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
    names: [ "vendor", "manifest" ],
  }),
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify(nodeEnv),
    },
  }),
  new InlineManifestWebpackPlugin({
    name: "webpackManifest",
  }),
  new HtmlWebpackPlugin({
    template: "index.ejs",
    filename: path.join(__dirname, "public/tmpl/default.tmpl"),
    inject: "body",
  }),
  function() {
    this.plugin("done", function(stats) {
      require("fs").writeFileSync(
        path.join(__dirname, "stats.json"),
        JSON.stringify(stats.toJson()))
    })
  },
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
    path: path.join(__dirname, "public/js"),
    publicPath: "/js/",
    filename,
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
  plugins: plugins,
}
