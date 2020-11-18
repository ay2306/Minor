import { DownloadRoutes } from './routes/download';
import { UploadRoutes } from './routes/upload';
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import cors = require('cors');
require('dotenv').config();

export class App{
    public app;
    public uploadRoutes;
    public downloadRoutes;
    constructor() {
        this.app = express();
        this.setup();
        this.uploadRoutes = new UploadRoutes();
        this.downloadRoutes = new DownloadRoutes();
        this.uploadRoutes.routes(this.app);
        this.downloadRoutes.routes(this.app);
    }
    private setup(): void{
        this.app.set('view engine','ejs');
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.set('../views', path.join(__dirname, 'views'));
        this.app.use('/static', express.static('../uploads'));
    }
}