const ncp = require("ncp").ncp

const buildDir = "./build"
const srcDestPairs = [
  [ "./server.js", `${buildDir}/server.js` ],
  [ "./backend", `${buildDir}/backend` ],
  [ "./public", `${buildDir}/public` ],
]
const copy = p => ncp(p[0], p[1], err =>
  console.log(err || `Copied ${p[0]} to ${p[1]}`)
)

srcDestPairs.map(copy)
