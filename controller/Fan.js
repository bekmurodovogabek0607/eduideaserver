//const Daraja = require("../models/Daraja")

const Fan = require("../models/Fan")


//==============================Get Fan==========================
const GetFan=async (req,res,next)=>{Fan.find()
    .then(respons=>{
        res.send(respons)
    })
    .catch(err=>{
        res.send(err)
    })
}

//===============================POSt Fan====================


const PsotFan =async(req,res,next)=>{
    if(req.body.nameUz==undefined && req.body.nameRu==undefined && req.body.nameEn==undefined){
        res.send('Fan Name Required')
    }else{
        const fan=new Fan(req.body)
        fan.save()
        .then(resp=>{
            res.send(resp)
        })
        .catch(err=>{
            res.send(err)
        })
    }
   
}

//===================================Delete Fan============


const DeleteFan= async (req,res,next)=>{
    await Fan.findByIdAndDelete(req.params.id)
    .then(resp=>{
        res.send("Deleted")
    })
    .catch(err=>{
        res.send(err)
    })
}

//==================================   Update Fan===================

const UpdateFan= async (req,res,next)=>{
    console.log(req.params.id);
    await  Fan.findByIdAndUpdate(req.params.id,req.body)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
}


module.exports={PsotFan,GetFan,DeleteFan,UpdateFan}