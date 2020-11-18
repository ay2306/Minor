"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadRoutes = void 0;
const download_1 = require("./../controller/download");
class DownloadRoutes {
    constructor() {
        this.downloadController = new download_1.DownloadController();
    }
    routes(app) {
        app.get('/download', this.downloadController.serveFile);
    }
}
exports.DownloadRoutes = DownloadRoutes;
//# sourceMappingURL=download.js.map