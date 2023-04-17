const Center = require("../models/Center")
const Student = require("../models/Student")


//--------------------------------Create New Center-----------------------------------------
const PostCenter = async (req, res, next) => {
    let centerid
    let passwordd
    await Center.find()
        .then(respons => {

            passwordd = respons.filter(item => { return item.password == req.body.password })

        })
        .catch(err => {
            res.status(400).send(err)
        })


    if (passwordd.length == 0) {
        const center = new Center(req.body)
        center.save()
        res.status(200).send('Account Yaratildi')
    }
    else {
        res.status(400).send('Yaroqsiz Password kiritildi')
    }
}

//================================== GET   All center  =======================================


const GetCenter = async (req, res, next) => {
    const cen=[]
    await Student.find()
        .then(resp => {
           
            Center.find()
                .then(respons => {
                    for (const i of respons) {
                        cen.push({ ...i._doc, trend: resp.filter(item => item.centerId == i._id).length })
                    }
                    

                    res.status(200).send(cen.sort((a,b)=>b.trend-a.trend))

                })
                .catch(err => {
                    res.status(400).send(err)
                })
        })
        .catch(err => {

        })


}
//================================== Post   One center  =======================================


const GetCenterOne = async (req, res, next) => {
    await Center.find()
        .then(respons => {
            const centers = respons.filter(item => (item.password == req.body.password && item.login == req.body.login))
            if (centers.length == 0) {
                res.status(400).send('Login yoki Password notogri')
            }
            else {
                res.status(200).send(centers)
            }

        })
        .catch(err => {
            res.status(400).send(err)
        })
}


//==================================   Delete center ============================================

const DeleteCenter = async (req, res, next) => {

    await Center.findByIdAndDelete(req.params.id)
        .then(respons => {
            res.status(200).send('deleted')
        })
        .catch(err => {
            res.status(400).send(err)
        })

}

//==================================  Center Update ==============================================

const UpdateCenter = async (req, res, next) => {

    await Center.find()
        .then(respons => {

            let password = respons.filter(item => item.password == req.body.password)
            let login = respons.filter(item => item.login == req.body.login)
            console.log(login);
            if (password.length == 1 && login.length == 1) {
                Center.findByIdAndUpdate(req.params.id, req.body)
                    .then(resp => {
                        res.send(resp)
                       
                    })
                    .catch(err => {
                        res.send(err)
                    })
            }
            else {
                res.status(400).send("Login yoki parol yaroqsiz")
            }

        })


}


module.exports = { PostCenter, GetCenter, UpdateCenter, DeleteCenter, GetCenterOne }