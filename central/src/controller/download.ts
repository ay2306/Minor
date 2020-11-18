export class DownloadController{
    public serveFile = (req,res)=>{
        const fileName = req.query.file;
        res.sendFile('D:\\code\\Minor\\central\\uploads\\'+fileName);
    }
}