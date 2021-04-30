const { Schema, model } = require('mongoose')

module.exports = model("payment", new Schema({
    ID: String,
    action: String,
    authorID: String,
    wishes: String,
    timestamp: Number,
    receiverID: { type: String, default: "Rioru" }
}))