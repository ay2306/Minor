const puppeteer = require('puppeteer');
const fs = require('fs');
const { execSync } = require('child_process');
function getRandomString(len){
    let str = "";
    while(str.length < len){
        str += Math.random().toString(36).substring(2);
    }
    str = str.slice(0,len);        
    str += ".txt"
    return str;
}

const randomFile = async (fileSize)=>{
}

(async()=>{
    /*
        Generates a random file
    */
   const fileName = getRandomString(15);
   let fileSize = 1024*1024;
   console.log('creating file');
    await execSync(`python run.py ${fileName} ${fileSize}`);
    console.log('created file');

    const browser = await puppeteer.launch({headless:false});   
    const page = await browser.newPage();
    {
        // await page.goto('localhost:8050/upload');
        // const element  = await page.$('#fileIn');
        // element.uploadFile(fileName);
        // const click = await page.$('#uploadClick');
        // const start = new Date();
        // await click.click();
        // await page.waitForNavigation({waitUntil: 'networkidle0'});
        // const end = new Date();
        // console.log("Time Take = ",end-start);
        // await page.goto('localhost:8050/upload');
    }
    {
        await page.goto('localhost:8050/ipfsUpload');
        const element  = await page.$('#fileIn');
        console.time('upload');
        element.uploadFile(fileName);   
        // element.uploadFile('Money.Heist.S04E08.720p.English.WebDL.@Amazon_Prime_Video_HD.mp4');
        // const click = await page.$('#uploadClick');
        // await click.click();
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        console.timeEnd('upload');
    }
})()
.then(()=>{
    console.log("Executed Correctly")
})
.catch((err)=>{
    console.log(err);
})