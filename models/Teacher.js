const mongoose =require('mongoose')
const Schema=mongoose.Schema

const Teacher=new Schema({
    centerId:String,
    filialId:String,
    password:String,
    name:String,
    email:String,
    tel:[],
   
    groupId:[],
    tolovId:String,
})
module.exports=mongoose.model('Teacher',Teacher)