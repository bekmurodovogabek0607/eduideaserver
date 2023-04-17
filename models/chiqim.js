const mongoose =require('mongoose')
const Schema=mongoose.Schema

const Chiqim=new Schema({
    senterId:String,
    filialId:String,
    chiqim:[{
        chiqimTuri:String,
        summa:Number
    }]
})