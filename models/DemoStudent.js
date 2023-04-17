const mongoose = require('mongoose')
const Schema = mongoose.Schema


const DemoStudent = new Schema({
    centerId: String,
    filialId: String,
    koribchiqildi:Boolean,
    name: String,
    tel: String,
})

module.exports = mongoose.model('DemoStudent', DemoStudent)