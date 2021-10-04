const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/user', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Congratulation!<h1> <br> <a href="http://localhost:8080">Return to Home</a>')
})

app.listen(3003)