//const Daraja = require("../models/Daraja")

const Tuman = require("../models/Tuman")


//==============================Get Tuman==========================
const GetTuman=async (req,res,next)=>{Tuman.find()
    .then(respons=>{
        res.send(respons)
    })
    .catch(err=>{
        res.send(err)
    })
}

//===============================POSt Tuman====================


const PsotTuman =async(req,res,next)=>{
    if(req.body.nameUz==undefined && req.body.nameRu==undefined && req.body.nameEn==undefined){
        res.send('Fan Name Required')
    }else{
        const fan=new Tuman(req.body)
        fan.save()
        .then(resp=>{
            res.send(resp)
        })
        .catch(err=>{
            res.send(err)
        })
    }
   
}

//===================================Delete Tuman============


const DeleteTuman= async (req,res,next)=>{
    await Tuman.findByIdAndDelete(req.params.id)
    .then(resp=>{
        res.send("Deleted")
    })
    .catch(err=>{
        res.send(err)
    })
}

//==================================   Update Tuman===================

const UpdateTuman= async (req,res,next)=>{
    console.log(req.params.id);
    await  Tuman.findByIdAndUpdate(req.params.id,req.body)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
}


module.exports={PsotTuman,GetTuman,DeleteTuman,UpdateTuman}