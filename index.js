const app = require('express')()

app.use(require('body-parser').json()) // req.body encoder
app.use((req, res, next) => require('./src/utils/guard')(req, res, next)) // The middleware security
app.get("/translates", require('./src/routes/Translate'))
app.use("/database/users", require('./src/routes/database/Users'))

app.listen(4040, () => { console.log("API Online") })