const mongoose =require('mongoose')
const Schema=mongoose.Schema


const Languge=new Schema({
    nameUz:String,
    nameRu:String,
    nameEn:String,
})

module.exports=mongoose.model('Languge',Languge)