//const Daraja = require("../models/Daraja")

const Viloyat = require("../models/Viloyat")


//==============================Get Viloyat==========================
const GetViloyat=async (req,res,next)=>{Viloyat.find()
    .then(respons=>{
        res.send(respons)
    })
    .catch(err=>{
        res.send(err)
    })
}

//===============================POSt Viloyat====================


const PsotViloyat =async(req,res,next)=>{
    if(req.body.nameUz==undefined && req.body.nameRu==undefined && req.body.nameEn==undefined){
        res.send('Fan Name Required')
    }else{
        const fan=new Viloyat(req.body)
        fan.save()
        .then(resp=>{
            res.send(resp)
        })
        .catch(err=>{
            res.send(err)
        })
    }
   
}

//===================================Delete Viloyat============


const DeleteViloyat= async (req,res,next)=>{
    await Viloyat.findByIdAndDelete(req.params.id)
    .then(resp=>{
        res.send("Deleted")
    })
    .catch(err=>{
        res.send(err)
    })
}

//==================================   Update Viloyat===================

const UpdateViloyat= async (req,res,next)=>{
    console.log(req.params.id);
    await  Viloyat.findByIdAndUpdate(req.params.id,req.body)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
}


module.exports={PsotViloyat,GetViloyat,DeleteViloyat,UpdateViloyat}