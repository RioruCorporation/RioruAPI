const { Schema, model } = require("mongoose")

module.exports = model("oauth", new Schema({
    OAuthToken: String,
    UserID: String
}))