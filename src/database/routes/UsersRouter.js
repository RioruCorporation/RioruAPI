const app = require("../../..");
const instance = require('../MongoDBInstance')
const b = "/database/users"

app.use(`${b}/getUserById/:id`, async (req, res) => {
    const user = instance.models.user.findOne({})
})