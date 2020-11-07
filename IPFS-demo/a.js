const IPFS = require('ipfs');
const fs = require('fs');
const util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var error_log_file = fs.createWriteStream(__dirname + '/error.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};

console.error = function(d) { //
    error_log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};

var node;
var start = new Date()
var hrstart = process.hrtime()
var simulateTime = 5

async function init(){
    let P = new Promise(async (resolve, reject) => {
        try{
            node = await IPFS.create()
            .then(setTimeout(() => {
                let end = new Date() - start,
                hrend = process.hrtime(hrstart)
                console.log("\nTIMING FOR INIT\n")
                console.log('Execution time: ' + end)
                console.log('Execution time (sec): ' + hrend[0] + " " + hrend[1] / 1000000)
                hrstart = process.hrtime();
                start = new Date();
    
                resolve("Done");
            }, 5000));
        }
        catch (e){
            console.log(e);
            reject(e);
        }
    })
    return P;
}

async function stop(){
    await node.stop();
    console.log("Stopped");
}

async function addFile(file, content){
    let P = new Promise(async (res, rej) => {
        try {
            const filesAdded = await node.add({
                path: 'hello.txt',
                content: Buffer.from('Hello World 101')
            })
            let end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.log("\nTIMING FOR ADDFILE FUNCTION\n")
            console.log('Execution time: ' + end)
            console.log('Execution time (sec): ' + hrend[0] + " " + hrend[1] / 1000000)
            hrstart = process.hrtime();
            start = new Date();

            res(filesAdded);
        } catch (error) {
            console.error(error);
            rej(error)
        }
    })
    return P;
}

async function cat(file){
    let P = new Promise(async(res, rej) => {
        try {
            console.log("CAT FUNCTION CALLED");
            console.log(file.cid.toString());
            // const catRes = await node.cat(file.cid);
            const chunks = []
            for await (const chunk of node.cat(file.cid)) {
                chunks.push(chunk)
            }

            console.log('Added file contents:', chunks.join(''));
            let end = new Date() - start,
            hrend = process.hrtime(hrstart)
            console.log("\nTIMING FOR CAT FUNCTION\n")
            console.log('Execution time: ' + end)
            console.log('Execution time (sec): ' + hrend[0] + " " + hrend[1] / 1000000)
            hrstart = process.hrtime();
            start = new Date();

            res(chunks.join(''));
        }
        catch(error){
            console.error(error);
            rej(error);
        }
    })
    return P;
}

init()
.then(() => {
    console.log("NODE CREATED")
    
    // console.log(node.files);

    addFile()
    .then((r) => {
        console.log("ADDED");
        console.log(r);
        cat(r)
        .then((res) => {
            console.log("FILE CONTENTS");
            console.log(res);
        })
        .catch((e) => {
            console.error(e);
        })
        stop();
    })
    .catch((e) => {
        console.error(e);

        stop();
    })
})
.catch(() => console.log("ERROR CATCHED SOMEWHERE"));