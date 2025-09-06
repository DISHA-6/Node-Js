const fs=require('fs')
console.log("Hello from first.js");

fs.writeFile('hello.txt','Hello from Node.js',(err)=>{
    if(err) console.log("Error occurred");
    else console.log("File written successfully");
})