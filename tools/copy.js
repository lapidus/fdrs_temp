const ncp = require("ncp").ncp

const buildDir = "./build"
const sources = [
  [ "server.js" ],
  [ "controllers" ],
  [ "public" ],
]
const copy = p => ncp(
  `./${p}`,
  `${buildDir}/${p}`,
  err => console.log(err || `Copied ${p}`)
)

sources.map(copy)
