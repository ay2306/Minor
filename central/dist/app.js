"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const download_1 = require("./routes/download");
const upload_1 = require("./routes/upload");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
class App {
    constructor() {
        this.app = express();
        this.setup();
        this.uploadRoutes = new upload_1.UploadRoutes();
        this.downloadRoutes = new download_1.DownloadRoutes();
        this.uploadRoutes.routes(this.app);
        this.downloadRoutes.routes(this.app);
    }
    setup() {
        this.app.set('view engine', 'ejs');
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.set('../views', path.join(__dirname, 'views'));
        this.app.use('/static', express.static('../uploads'));
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map