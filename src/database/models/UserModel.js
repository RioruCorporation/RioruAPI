const { Schema, model } = require("mongoose");

module.exports = model(
    "user", 
    new Schema({
        ID: String
    })
)