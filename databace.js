const mongoose=require('mongoose')
const mongoURL = 'mongodb://localhost:27017/crmuz'
module.exports= ()=>{
    mongoose.connect(mongoURL).then(()=>{console.log('connect mongobd');})
}