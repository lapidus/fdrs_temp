"use strict"

const lfs = require("larvitfs")

exports.run = function(req, res, cb) {
  req.routeResult.controllerName = "default"
  require(lfs.getPathSync("controllers/default.js")).run(req, res, cb)
}