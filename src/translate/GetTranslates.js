const fs = require('fs')
const child_process = require("child_process")

try {
    if(fs.lstatSync("./src/translate/RioruLocales").isDirectory()) {
        child_process.exec("cd ./src/translate/RioruLocales && git pull")
    }
} catch(e) {
    child_process.exec("cd ./src/translate && git clone https://github.com/RioruCorporation/RioruLocales")
} finally {
    setInterval(() => {
        child_process.exec("cd ./src/translate/RioruLocales && git pull")
    }, 10000)
}