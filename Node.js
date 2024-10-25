// Nodejs file operations:

const fs = require("fs");

// CREATE/WRITE:

fs.writeFileSync("./text.txt","im dummy");

fs.writeFile("./text.txt","im dummy2",(err) => {});

// READ:

const result = fs.readFileSync("./text.txt","utf-8");
console.log(result);

fs.readFile("./text.txt","utf-8",(err ,result) => {
    if(err){
        console.log("error",err);
    }
    else{
        console.log(result);
    }
})

// APPEND:

fs.appendFileSync("./text.txt","\n im new here");

// RENAME:

fs.renameSync("./text.txt","./dummy.txt");

// DELETE:

// fs.unlinkSync("./dummy.txt");
