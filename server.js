const express=require('express')
const path =require('path')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const fileUpload = require('express-fileupload');
const fileRoutes=require('./routes/router')
require('./databace')()
app.use(fileUpload({
    createParentPath:true,
   
}));

app.use(cors())
app.use(bodyParser.json())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/api',fileRoutes.routes)
app.listen(5000,()=>{console.log('listening on port 5000');})