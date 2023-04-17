//const Daraja = require("../models/Daraja")

const Daraja = require("../models/Daraja")


//==============================Get Daraja==========================
const GetDaraja=async (req,res,next)=>{Daraja.find()
    .then(respons=>{
        res.send(respons)
    })
    .catch(err=>{
        res.send(err)
    })
}

//===============================POSt Daraja====================


const PsotDaraja =async(req,res,next)=>{
    if(req.body.nameUz==undefined && req.body.nameRu==undefined && req.body.nameEn==undefined){
        res.send('Daraja Name Required')
    }else{
        const daraja=new Daraja(req.body)
        daraja.save()
        .then(resp=>{
            res.send(resp)
        })
        .catch(err=>{
            res.send(err)
        })
    }
   
}

//===================================Delete Daraja============


const DeleteDaraja= async (req,res,next)=>{
    await Daraja.findByIdAndDelete(req.params.id)
    .then(resp=>{
        res.send("Deleted")
    })
    .catch(err=>{
        res.send(err)
    })
}

//==================================   Update Daraja===================

const UpdateDaraja= async (req,res,next)=>{
    console.log(req.params.id);
    await  Daraja.findByIdAndUpdate(req.params.id,req.body)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
}


module.exports={PsotDaraja,GetDaraja,DeleteDaraja,UpdateDaraja}