


const DownloadFile=async(req,res,next)=>{
    
    var file = fs.readFileSync(__dirname + req.body.path, 'binary');

    res.setHeader('Content-Length', file.length);
    res.write(file, 'binary');
    res.end();
}
module.exports={DownloadFile}