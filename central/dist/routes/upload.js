"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadRoutes = void 0;
const upload_1 = require("./../controller/upload");
const multer = require("multer");
// const upload = multer({
//     dest: 'uploads/'
// })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // console.log(file);
        cb(null, file.originalname + '-' + Date.now());
    }
});
const upload = multer({ storage: storage });
class UploadRoutes {
    constructor() {
        this.uploadController = new upload_1.UploadController();
    }
    routes(app) {
        app.post('/upload', upload.single('fileName'), this.uploadController.uploadFile);
        app.get('/upload', this.uploadController.serveFile);
    }
}
exports.UploadRoutes = UploadRoutes;
//# sourceMappingURL=upload.js.map