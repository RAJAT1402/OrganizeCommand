// main input
// 1.input -> node main.js tree "path"
// print -> tree command executed with path ""
// 2.input -> node main.js organize "path"
// print -> organize command with path ""
// 3.input -> node.js help
// print -> list of all the commands
         // 1. node main.js tree "path"
         // 2. node main.js organize "path"
         // 3. node main.js help

let fs = require("fs");

let helpObj = require("./Commands/help");           //requiring objects from help.js
let treeObj = require("./Commands/tree");           //requiring objects from tree.js
let organizeObj = require("./Commands/organize");   //requiring objects from organize.js

let inputArr = process.argv.slice(2);               //getting input
let command = inputArr[0];                          //getting which command we have to perform

if(inputArr[1] == undefined){                       //checking if path is given else giving current path
    path = process.cwd();
}else {
    let doesExist = fs.existsSync(inputArr[1]);                                 //checking if path exists or not
    if(doesExist == true){
        path = inputArr[1];
    } else {
        console.log("Wrong path pls rerun the command with corect path");
        return;
    }
}


//comparing which command we have to perform and calling that object
if(command == "help"){

    helpObj.fxn();

} else if (command == "tree"){

    treeObj.fxn(path);

} else if (command == "organize"){

    organizeObj.fxn(path);

}