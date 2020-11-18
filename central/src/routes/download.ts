import { DownloadController } from './../controller/download';

export class DownloadRoutes{
    public downloadController;
    constructor(){
        this.downloadController = new DownloadController();
    }
    public routes(app){
        app.get('/download',this.downloadController.serveFile);
    }
}