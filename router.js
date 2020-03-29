const express = require('express')
const Student = require('./student')
const fs = require('fs')
var router = express.Router()

router.get('/students', (req, res) => {
    Student.find((err, data) => {
        if (err) return res.status(500).send('Sever error.')
        res.render('index.html', {
            data
        })
    })
})

router.get('/students/new', (req, res) => {
    res.render('addStudent.html')
})


router.post('/students/new', (req, res) => {
    console.log(req.body)
    Student.save(req.body, (err) => {
        if (err) res.status(500).send('Sever error.')
    })
    res.redirect('/students')
})

router.post('/studentsnew', (req, res) => {

})

router.get('/students/edit', (req, res) => {

})

router.post('/students/edit', (req, res) => {

})

router.get('/students/detele', (req, res) => {

})

module.exports = router
