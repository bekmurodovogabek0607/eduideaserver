const Kategoriya = require("../models/Kategoriya")


//==============================Get KAtegoriya==========================
const GetKategoriya=async (req,res,next)=>{
    await Kategoriya.find()
    .then(respons=>{
        res.send(respons)
    })
    .catch(err=>{
        res.send(err)
    })
}

//===============================POSt Kategoriya====================


const PsotKategoriya =async(req,res,next)=>{
    if(req.body.nameUz==undefined && req.body.nameRu==undefined && req.body.nameEn==undefined){
        res.send('Kategoriya Name Required')
    }else{
        const kategoriya=new Kategoriya(req.body)
        kategoriya.save()
        .then(resp=>{
            res.send(resp)
        })
        .catch(err=>{
            res.send(err)
        })
    }
   
}

//===================================Delete Categoriya============


const DeleteKategoriya= async (req,res,next)=>{
    await Kategoriya.findByIdAndDelete(req.params.id)
    .then(resp=>{
        res.send("Deleted")
    })
    .catch(err=>{
        res.send(err)
    })
}

//==================================   Update Kategoriya===================

const UpdateKategoriya= async (req,res,next)=>{
    console.log(req.params.id);
    await  Kategoriya.findByIdAndUpdate(req.params.id,req.body)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
}

module.exports={PsotKategoriya,GetKategoriya,DeleteKategoriya,UpdateKategoriya}