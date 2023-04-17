//const Daraja = require("../models/Daraja")

const Language = require("../models/Language")


//==============================Get Language==========================
const GetLanguage=async (req,res,next)=>{Language.find()
    .then(respons=>{
        res.send(respons)
    })
    .catch(err=>{
        res.send(err)
    })
}

//===============================POSt Language====================


const PsotLanguage =async(req,res,next)=>{
    if(req.body.nameUz==undefined && req.body.nameRu==undefined && req.body.nameEn==undefined){
        res.send('Fan Name Required')
    }else{
        const language=new Language(req.body)
        language.save()
        .then(resp=>{
            res.send(resp)
        })
        .catch(err=>{
            res.send(err)
        })
    }
   
}

//===================================Delete Language============


const DeleteLanguage= async (req,res,next)=>{
    await Language.findByIdAndDelete(req.params.id)
    .then(resp=>{
        res.send("Deleted")
    })
    .catch(err=>{
        res.send(err)
    })
}

//==================================   Update Language===================

const UpdateLanguage= async (req,res,next)=>{
    console.log(req.params.id);
    await  Language.findByIdAndUpdate(req.params.id,req.body)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
}


module.exports={PsotLanguage,GetLanguage,DeleteLanguage,UpdateLanguage}