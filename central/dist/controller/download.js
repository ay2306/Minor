"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadController = void 0;
class DownloadController {
    constructor() {
        this.serveFile = (req, res) => {
            const fileName = req.query.file;
            res.sendFile('D:\\code\\Minor\\central\\uploads\\' + fileName);
        };
    }
}
exports.DownloadController = DownloadController;
//# sourceMappingURL=download.js.map