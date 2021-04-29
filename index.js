const set = new Set()
const { default: fetch } = require('node-fetch')

const app = require('express')() // Instancia do Servidor
require("./src/database/MongoDBManager")
require("./src/translate/GetTranslates")

app.use(function(req, res) {
    set.add(req.ip.toString())
    const header = req.headers["authorization"]
    if(!header) return res.send({ code: 401 })
    if(header !== "Ym9vbWVyLHZzZmtra2tr") return res.send({ message: "Invalid secret", code: 401 })
})

app.listen(4040, () => console.log("API Online"))
module.exports = app
// Só pode registrar a rota daqui pra baixo, se não dá erro
require('./src/translate/TranslateRoutes')
require('./src/database/routes/UsersRouter')