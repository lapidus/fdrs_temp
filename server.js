"use strict"

const log = require("winston")
const each = require("lodash/each")

process.cwd(__dirname)

const serverConf = {
  "port": process.env.PORT || 3000,
  "log": {
    "Console": {
      "level": "verbose",
      "json": false,
      "timestamp": true,
      "colorize": true,
    },
  },
}

// Add support for daily rotate file
log.transports.DailyRotateFile = require("winston-daily-rotate-file")

// Handle logging from server.json config file
log.remove(log.transports.Console)
if (serverConf.log !== undefined) {
  each(serverConf.log, (logInstances, logName) => {
    if (typeof logInstances !== Array) logInstances = [ logInstances ]

    each(logInstances, logInstance =>
      log.add(log.transports[logName], logInstance)
    )
  })
}

serverConf.customRoutes = [
  { "regex": "(\.pdf$|\.pdf\?)", "controllerName": "urltopdf" },
]

require("larvitbase")(serverConf)