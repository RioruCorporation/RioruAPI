const route = require('express').Router()

route.post("/create", (req, res) => {
    if(!req.body.configs) return res.send({ message: "You need provide the configuration of the new user", code: 401 }) 
})

route.post("/get")

module.exports = route