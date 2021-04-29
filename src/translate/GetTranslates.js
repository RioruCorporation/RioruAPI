const fs = require('fs')
const child_process = require("child_process")

try {
    if(fs.lstatSync("./src/translate/RioruLocales").isDirectory()) {
        console.log("deu certo")
        child_process.exec("cd ./src/translate && del /q ./RioruLocales && git clone https://github.com/RioruCorporation/RioruLocales")
    }
} catch(e) {
    child_process.exec("cd ./src/translate && git clone https://github.com/RioruCorporation/RioruLocales")
}