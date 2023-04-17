

//==================================== POST Student==========================

const Student = require("../models/Student")

const PostStudent=async (req,res,next)=>{
    const student=new Student(req.body)
    await student.save()
    .then(res=>{
        res.send(res)
    })
    .catch(err=>{
        res.send(err)
    })
}

//=====================================Get  Studnet ===========================================

const GetStudent=async(req,res,next)=>{
    await Student.find()
    .then(resp=>{
        const stu=resp.filter(item=>item.centerId==req.params.id && item.active==false && item.check==false)
        res.send(stu)
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports={PostStudent,GetStudent}