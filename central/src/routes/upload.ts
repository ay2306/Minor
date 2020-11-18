import { UploadController } from './../controller/upload';
import multer = require('multer');
// const upload = multer({
//     dest: 'uploads/'
// })

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },  
    filename: function (req, file, cb) {
        // console.log(file);
        cb(null, file.originalname);
    }
  })
  
const upload = multer({ storage: storage })
export class UploadRoutes{
    public uploadController;
    constructor(){
        this.uploadController = new UploadController();
    }
    public routes(app){
        app.post('/upload',upload.single('fileName'),this.uploadController.uploadFile);
        app.get('/upload',this.uploadController.serveFile);
        app.get('/ipfsUpload',this.uploadController.ipfsUpload);
    }
}