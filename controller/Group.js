const Group = require("../models/Group")





const PostGroups =async (req,res,next)=>{

    const group =new Group(req.body)
   await group.save()
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.send(err)
    })
    
    
}
const GetCenterGroups=async (req,res,next)=>{
   await Group.find()
   .then(respons=>{
        const CenterGroup=respons.filter(item=>item.centerId==req.params.id)
        res.send(CenterGroup)
   })
   .catch(err=>{
    res.send(err)
   })
}
module.exports={PostGroups,GetCenterGroups}