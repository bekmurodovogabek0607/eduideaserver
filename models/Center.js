const mongoose =require('mongoose')
const Schema=mongoose.Schema

const Center=new Schema({
    name:String,
    logoPath:String,
    password:String,
    login:String,
    Centertel:String,
    active:Boolean,
    current:Number,
    activeCheckPremiumDate:Boolean,
    premium:Boolean,
    testpremiumdate:String,
    filial:[{
        adress:String,
        googleMap:String,
        telegram:String,
        instagram:String,
        website:String,
        shahar:String,
        tuman:String,

        tel:String,

    }],
    descreption:String,
})
module.exports=mongoose.model('Center',Center)
