const mongoose =require('mongoose')
const Schema=mongoose.Schema


const Tuman=new Schema({
    viloyatId:String,
    nameUz:String,
    nameRu:String,
    nameEn:String,

})

module.exports=mongoose.model('Tuman',Tuman)