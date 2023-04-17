const mongoose =require('mongoose')
const Schema=mongoose.Schema


const Fan=new Schema({
    nameUz:String,
    nameRu:String,
    nameEn:String,

})

module.exports=mongoose.model('Fan',Fan)