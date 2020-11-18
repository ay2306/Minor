let puppeteer = require('puppeteer');
let fs = require('fs');
let { execSync } = require('child_process');
let axios = require('axios');
function getRandomString(len){
    let str = "";
    while(str.length < len){
        str += Math.random().toString(36).substring(2);
    }
    str = str.slice(0,len);        
    str += ".txt"
    return str;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


(async()=>{
    // let node = {"type":"central","downloadUrl":"localhost:8050/download?file=vwcnv405mlw8zkr.txt","uploadTime":962,"frequency":1,"downloadTime":3654};
    // const res = await axios.post('http://127.0.0.1:8051/save',node);
    // console.log(res);
    /*
        Generates a random file
    */
    const FREQUENCY = 1;
    let data = [];
    let fileName = getRandomString(15);
    let fileSize = 1024*1024*getRandom(1,1);
    console.log('creating file');
    await execSync(`python run.py ${fileName} ${fileSize}`);
    console.log('created file');
    let browser = await puppeteer.launch({headless:false});   
    let page = await browser.newPage();
    for(let freq = 1; freq <= FREQUENCY; ++freq){
        await page.goto('localhost:8050/upload');
        let element  = await page.$('#fileIn');
        element.uploadFile(fileName);
        let click = await page.$('#uploadClick');
        let start = new Date();
        await click.click();
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        let end = new Date();
        console.log("Time Take = ",end-start);
        
        let node = {};
        node['type'] = 'central';
        node['downloadUrl'] = 'localhost:8050/download?file=' + fileName;
        node['uploadTime'] = end - start;
        node['frequency'] = freq;
        
        start = new Date();
        await page.goto(node['downloadUrl']);
        // await page.waitForNavigation({waitUntil: 'networkidle0',timeout:0});
        end = new Date();
        node['downloadTime'] = end-start;        
        console.log("Time Take = ",end-start);
        node['size'] = fileSize;
        // data.push(node);
        await axios.post('http://127.0.0.1:8051/save',node);
    }
    for(let freq = 1; freq <= FREQUENCY; ++freq){
        await page.goto('localhost:8050/ipfsUpload');
        let element  = await page.$('#fileIn');
        console.time('upload');
        element.uploadFile(fileName);   
        let click = await page.$('#uploadIPFS');
        let start = new Date();
        await timeout(5000);
        console.log("5000");
        await click.click();
        await page.waitForNavigation({waitUntil: 'networkidle0',timeout:0});
        let end = new Date();
        console.log(page.url());
        console.log("Time Take = ",end-start);
        
        let node = {};
        node['type'] = 'distributed';
        node['downloadUrl'] = page.url();
        node['uploadTime'] = end - start;
        node['frequency'] = freq;
        
        start = new Date();
        await page.goto(node['downloadUrl']);
        end = new Date();
        node['downloadTime'] = end-start;
        node['size'] = fileSize;
        // data.push(node);
        await axios.post('http://127.0.0.1:8051/save',node);
    }
    browser.close();
    await execSync(`python deleteFile.py ${fileName}`);
})()
.then(()=>{
    console.log("Executed Correctly")
})
.catch((err)=>{
    console.log(err.message);
})