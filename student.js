const fs = require('fs')

const dbPath = './db.json'
//读取学生列表
exports.find = (callback) => {
    fs.readFile(dbPath, (err, data) => {
        if(err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

exports.findById = (id, callback) => {
    fs.readFile(dbPath, (err ,data) => {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        var ret = students.find((item) => {
            return item.id === parseInt(id)
        })
        callback(null, ret)
    })
}

exports.save = (student, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        var fileData = JSON.stringify({
            students
        })
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) return callback(err)
        })
        callback(null)
    })
}
exports.updateById = (student, callback) => {
    student.id = parseInt(student.id)
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            return callback(err)
        }
        var  students = JSON.parse(data).students
        var stu = students.find((item) => {
            return item.id === student.id
        })
        for (var key in student) {
            stu[key] = student[key]
        }
        var fileData = JSON.stringify({
            students
        })
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) return callback(err)
        })
        callback(null)
    })
}
exports.deteleById = (id, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        var deteleId = students.findIndex((item) => {
            item.id === parseInt(id)
        })
        students.splice(deteleId, 1)
        var fileData = JSON.stringify({
            students
        })
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) return callback(err)
        })
        callback(null)
    })
}
