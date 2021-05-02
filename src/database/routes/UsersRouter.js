const app = require("../../..");
const database = require("../../utils/database");
const instance = require('../MongoDBInstance')
const b = "/database/users"

const route = require('express').Router()
route.use("/users", require("../"))
app.use(`${b}/get`, async (req, res, next) => {
    database(req, res, next)
    await instance.models.user.findOne({ ID: req.params.id }, (err, doc) => {
        if(err) return res.send({ error: err })
        else res.send({ response: JSON.parse(doc) })
    })
})

app.use(`${b}/create`, (req, res, next) => {
    database(req, res, next)
})

app.use(`${b}/update`, (req, res, next) => {
    database(req, res, next)
})
