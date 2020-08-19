const {connectToHTTP,readOSInfo} = require('./utils');
const readline = require("readline");
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const promtUser = () =>{

    rl.question("Choose an option: \n 1.Read package.json\n 2.Display OS info\n 3.Start HTTP server\n Type a number: ", function(option) {
        
           // console.log(`You chose option: ${option}`);
           let choise = option;
           
            if(choise == 1){
            readFile();
            rl.close();
            }else if(choise == 2){
                
                readOSInfo();
                rl.close();
            }else if(choise == 3){
            
                connectToHTTP();
    
            }else{
                console.log(`You chose option: ${option} that is not a valid choise`)
                promtUser();
            }
        
        
    });
    
    rl.on("close", function() {
        process.exit(0);
    });
}

promtUser();



function readFile(){
 try {  
     console.log("Reading package.json file")
    var data = fs.readFileSync('package.json', 'utf8');
    console.log(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}
}







