const mongoose =require('mongoose')
const Schema=mongoose.Schema
const DemoCenter =new Schema( {
    CenterName:String,
    Tel:Number,
    MurojaatVaqti:String
})
module.exports=mongoose.model('DemoCenter',DemoCenter)