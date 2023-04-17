const mongoose =require('mongoose')
const Schema=mongoose.Schema

const Student=new Schema({
    centerId:String,
    filialId:String,
    password:String,
    login:String,
    name:String,
    email:String,
    active:Boolean,
    check:Boolean,
    tel:String,
    otaonatel:[],
    groupId:[],
    tolovId:String,
    hisob:Number
})
module.exports=mongoose.model('Student',Student)