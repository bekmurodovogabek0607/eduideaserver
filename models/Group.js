const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Group = new Schema({
    centerId: String,
    filialId: String,
    fan: String,
    name: String,
    language: String,
    kategoriyaId: String,
    narxi: String,
    daraja: String,
    darsKuni: Object,
    xona: String,
    descreptionUz: String,
    descreptionRu: String,
    descreptionEn: String,
    vaqtdan: String,
    vaqtgacha: String,
    teacherId: String,
    student: [],
    davomat: [{
        date: String,
        davomat: [
            {
                studentId: String,
                sabab: String
            }
        ],
        topshiriq: String,
        topshiriqPath: String,

    }],
    dars: [{
        date: String,
        mavzu: String,
        materialPath: String,
        vazifaPath: String,
        descreption: String
    }],
    imtihom: [{
        date: String,
        student: [{
            studentId: String,
            result: Number,
        }]
    }]
})
module.exports = mongoose.model('Group', Group)