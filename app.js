const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router')
app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))
app.use(router)

app.listen(3000, () => {
    console.log('running 3000')
})
