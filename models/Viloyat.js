const mongoose =require('mongoose')
const Schema=mongoose.Schema


const Viloyat=new Schema({
    nameUz:String,
    nameRu:String,
    nameEn:String,

})

module.exports=mongoose.model('Viloyat',Viloyat)