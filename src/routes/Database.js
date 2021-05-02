const route = require('express').Router()

route.use('/', (req, res) => res.send({ code: 200 }))
route.use('/users', require('./database/Users'))

module.exports = route