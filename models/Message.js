const mongoose =require('mongoose')
const Schema=mongoose.Schema


const Message=new Schema({
    turi:String,
    desc:String,
    like:Number,
    disLike:Number,
})