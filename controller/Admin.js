

const Admin = require("../models/Admin")


//==============================Get Admin==========================
const GetAdmin = async (req, res, next) => {
    Admin.find()
        .then(respons => {
            res.send(respons)


        })
        .catch(err => {
            res.send(err)
        })
}

//===============================POSt Admin====================


const PsotAdmin = async (req, res, next) => {
    let pass;
    await Admin.find()
        .then(resp => {

            pass = resp.filter(item => item.password == req.body.password)
        })
        .catch(err => {
            res.send(err)
        })
    console.log(pass);
    if (pass.length != 0) {
        res.send('Yaroqsiz Parol ishlatildi Parolni o\'zgartirib ko\'ring')
    } else {
        const admin = new Admin(req.body)
        admin.save()
            .then(respons => {
                res.send(respons)
            })
            .catch(err => {
                res.send(err)
            })
    }

}

//===================================Delete Admin============


const DeleteAdmin = async (req, res, next) => {
    await Admin.findByIdAndDelete(req.params.id)
        .then(resp => {
            res.send("Deleted")
        })
        .catch(err => {
            res.send(err)
        })
}

//==================================   Update Admin===================

const UpdateAdmin = async (req, res, next) => {
    console.log(req.params.id);
    let pass;
    await Admin.find()
        .then(resp => {

            pass = resp.filter(item =>(item.password == req.body.password && item._id!=req.params.id))
        })
        .catch(err => {
            res.send(err)
        })
    if (pass.length == 0) {
        await Admin.findByIdAndUpdate(req.params.id, req.body)
            .then(resp => {
                res.send(resp)
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }
    else {
        res.send('Yaroqsiz Parol ishlatildi Parolni o\'zgartirib ko\'ring')
    }

}


module.exports = { PsotAdmin, GetAdmin, DeleteAdmin, UpdateAdmin }