"use strict"

const express = require("express")
const favicon = require("serve-favicon")
const morgan = require("morgan")
const bodyParser = require("body-parser")

const renderView = require("./renderView")

const server = express()
const port = process.env.PORT || 3000

server.use(morgan("dev")) // or tiny
server.use(express.static(__dirname + "/../public"))
server.use(favicon(__dirname + "/../public/img/favicon.ico"))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use((req, res) => {
  res.send(renderView())
})

server.listen(port, () => {
  console.log("App is listening on port ", port)
})
