"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
class UploadController {
    constructor() {
        this.serveFile = (req, res) => {
            res.render('index');
        };
        this.uploadFile = (req, res) => {
            res.render('index');
        };
        this.ipfsUpload = (req, res) => {
            res.render('ipfs');
        };
    }
}
exports.UploadController = UploadController;
//# sourceMappingURL=upload.js.map