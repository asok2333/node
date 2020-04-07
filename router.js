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
    console.log(req.query.id)
})

router.get('/students/edit', (req, res) => {
    Student.findById(parseInt(req.query.id), (err, student) => {
        if (err) return res.status(500).send('Sever error.')
        res.render('edit.html', {
            student
        })
    })
})

router.post('/students/edit', (req, res) => {
    Student.updateById(req.body, (err) => {
        if (err) return res.status(500).send('Sever error.')
        res.redirect('/students')
    })
})

router.get('/students/detele', (req, res) => {
    Student.deteleById(req.body.id, (err) => {
        if (err) return res.status(500).send('Sever error.')
        res.redirect('/students')
    })
})

module.exports = router
