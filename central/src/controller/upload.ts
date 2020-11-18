export class UploadController{
    public serveFile = (req,res)=>{
        res.render('index');
    }
    public uploadFile = (req,res)=>{
        res.render('index');
    }
    public ipfsUpload = (req,res)=>{
        res.render('ipfs');
    }
}