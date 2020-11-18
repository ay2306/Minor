import {App} from './app';
const port = process.env.PORT || 8050;
const _app = new App();
_app.app.listen(port,(err)=>{
    if(err){
        return console.log(err);
    }else{
        return console.log(`Server is listening to ${port}`);
    }  
})