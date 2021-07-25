let fs = require("fs");
function print(path){
    let content = fs.readdirSync(path);             //reading all the content in the folder
    for(let i = 0 ; i < content.length ; i++){      //loop for printing all the content in the folder
        console.log(content[i]);
    }
}

module.exports = {
    fxn : print
}