const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const router = require("./router.js")
const newrelic = require('newrelic');
const serverless = require('serverless-http')



app.use(bodyParser.json())
app.use(morgan('combined'))

app.use('/products', router)

const port = process.env.PORT
// app.listen(port, function () {
//     console.log(`listening on port ${port}`)
// })

module.exports.handler = serverless(app)