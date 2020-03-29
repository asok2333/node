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
exports.update = () => {

}
exports.detele = () => {

}
