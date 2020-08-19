const http = require('http');
const os = require('os');


module.exports.connectToHTTP = function (){
    console.log("Starting HTTP server...\nlistening on port 3000...");
    const server = http.createServer((req, res) => {

        if(req.url === "/"){
            res.write("Hello World!")
            res.end();
        }
        
    });
    server.listen(3000);
}


module.exports.readOSInfo = function(){
    console.log("Getting OS info...")
    console.log('SYSTEM MEMORY', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB');
    let freemem = os.totalmem - os.freemem();
    console.log('FREE MEMORY', (freemem / 1024 / 1024 / 1024).toFixed(2) + ' GB');
    console.log('CPU CORES', (os.cpus().length));
    let arch = os.arch();
    console.log('ARCH' , arch);
    let platform = os.platform();
    console.log('PLATFORM ', platform);
    let release = os.release();
    console.log('RELEASE', (release));
    let userInfo = os.userInfo();
    console.log('USER', userInfo.username);
}
