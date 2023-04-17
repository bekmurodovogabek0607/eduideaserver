
const  DemoCenter=require('../models/DemoCenter')

//  create Demo 

const PostDemoCenter=async (req,res,next)=>{

    
    if(req.body.CenterName==undefined && req.body.Tel==undefined){
        res.send("CenterName va Tel Majburiy").status(400)
    }
    else{
        const Centerdemo=new DemoCenter({
            CenterName:req.body.CenterName,
            Tel:req.body.Tel,
            MurojaatVaqti:req.body.MurojaatVaqti
        })
        await Centerdemo.save()
        res.send('Saved message').status(200)
        
    }
   


}
//  Get  Demo
const GetDemoCenter=async (req,res,next)=>{
    await DemoCenter.find()
    .then(respons=>{
        res.send(respons).status(200)
    })
    .catch(err=>{
        res.send('Error').status(400)
    })
}

//  Delete Demo

const DeleteDemoCenter= async (req,res,next)=>{
    await DemoCenter.findByIdAndDelete(req.params.id)
    .then(respons=>{
        res.send("Deleted").status(200)
    })
    .catch(err=>{
        res.send("Error").status(400)
    })
}

module.exports={PostDemoCenter,GetDemoCenter,DeleteDemoCenter}