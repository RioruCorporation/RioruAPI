const app = require('express')()

module.exports = app  

app.use(require('body-parser').json()) // Receive the request body
app.use((req, res, next) => require('./src/utils/guard')(req, res, next)) // The middleware security
.listen(4040, 
    () => {
        // Utils
        require("./src/database/MongoDBManager") 
        require("./src/translate/GetTranslates")  
        // Routes
        require('./src/translate/TranslateRoutes')
        require('./src/database/routes/UsersRouter')
        console.log("API Online")
    }
    )