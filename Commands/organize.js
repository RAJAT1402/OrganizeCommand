let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function print(path1){
    
    let folderContent = fs.readdirSync(path1);                  //extracting contents in the given paths

    let mainFolderPath = path.join(path1,"organize");           
    fs.mkdirSync(mainFolderPath);                               //Creating organize folder

    for(let i = 0 ; i < folderContent.length ; i++){            //loop on contents in folder
        let extension = path.extname(folderContent[i]);
        let ext = extension.split(".")[1];
        
        let folderName = "other";

        for(key in types){                                      //loop on key in objects
            for(let j = 0 ; j < types[key].length ; j++){       //loop on array on each key in object
                if(ext == types[key][j]){                       //comparing the given extension with available extension
                    folderName = key;
                    break;
                } 
            }
        }

        let typesPath = path.join(mainFolderPath,folderName);

        let doesExist = fs.existsSync(typesPath);
        
        if(!doesExist){                                         //chechking if folder exists ppr not
                fs.mkdirSync(typesPath);                        // if not exists then create a folder
        } 

        let srcPath = path.join(path1,folderContent[i]);                        //source path of copy file
        let destPath = path.join(mainFolderPath,folderName,folderContent[i]);   //destination path where file is to be copies
        fs.copyFileSync(srcPath,destPath);
    }
}

module.exports = {
    fxn : print
}