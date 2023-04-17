const mongoose =require('mongoose')
const Schema=mongoose.Schema


const Kategoriya=new Schema({
    nameUz:String,
    nameRu:String,
    nameEn:String,
    photoId:String,
})

module.exports=mongoose.model('Kategoriya',Kategoriya)