const mongoose =require('mongoose')
const Schema=mongoose.Schema

const tolov=new Schema({
    centerId:String,
    filialId:String,
    tolov:[
        {
            tolovchiId:String,
            oluvchiId:String,
            tolovNo:String,
            summa:String,
            turi:String,
            desc:String
        }
    ]

    
    
    
})
module.exports=mongoose.model('tolov',tolov)