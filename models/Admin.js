const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
    centerId: String,
    filialId: String,
    password: String,
    name: String,
    email: String,
    tel: [],


    addTeacher: Boolean,
    tolovOlish: Boolean,
    maoshBerish: Boolean,
    avansBerish: Boolean,
    chegirmaBerish: Boolean,
    maoshlarniKorish: Boolean,
    daromadniKorish: Boolean,
    ChiqimniKorish: Boolean,

    tolovId: String,
})
module.exports = mongoose.model('Admin', Admin)