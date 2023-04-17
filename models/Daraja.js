const mongoose =require('mongoose')
const Schema=mongoose.Schema


const Daraja=new Schema({
    nameUz:String,
    nameRu:String,
    nameEn:String,
})

module.exports=mongoose.model('Daraja',Daraja)