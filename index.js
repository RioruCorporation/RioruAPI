const app = require('express')()

//"Ym9vbWVyLHZzZmtra2tr"
require("./src/database/MongoDBManager")
require("./src/translate/GetTranslates")

app.listen(4040, () => {
    console.log("Servidor conectado")
})

module.exports = app