const path = require("path")

const express = require("express")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const urltopdf = require("larviturltopdf")

const app = express()
const port = process.env.PORT || 3000

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))




app.get("/:lang(en|es|ar|fr|)/fdrs/societies/:id.pdf", (req, res, next) => {

  console.log("Generating PDF1", `${req.protocol}://${req.get("host")}${req.originalUrl.replace(".pdf", "")}`)

  console.log("Generating PDF", `${req.protocol}://${req.get("host")}${req.originalUrl.replace("societies", "societies_pdf").replace(".pdf", "")}`)

  const options = {
    url: `${req.protocol}://${req.get("host")}${req.originalUrl.replace("societies", "societies_pdf").replace(".pdf", "")}`,
    waitForHtmlReadyClass: true,
    paperFormat : "A4"
  }

  urltopdf(options, function(err, pdfBuffer) {
    if (err) return next(err, req, res)
    res.end(pdfBuffer)
  })
})




app.get("/fdrs/societies/:id.pdf", (req, res, next) => {

  console.log("Generating PDF1", `${req.protocol}://${req.get("host")}${req.originalUrl.replace(".pdf", "")}`)

  console.log("Generating PDF", `${req.protocol}://${req.get("host")}${req.originalUrl.replace("societies", "societies_pdf").replace(".pdf", "")}`)

  const options = {
    url: `${req.protocol}://${req.get("host")}${req.originalUrl.replace("societies", "societies_pdf").replace(".pdf", "")}`,
    waitForHtmlReadyClass: true,
    paperFormat : "A4"
  }

  urltopdf(options, function(err, pdfBuffer) {
    if (err) return next(err, req, res)
    res.end(pdfBuffer)
  })
})

app.use("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"))
})

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

app.listen(port, () => {
  console.log("App listening on port", 3000)
})
