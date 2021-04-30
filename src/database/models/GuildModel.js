const { Schema, model } = require('mongoose')

module.exports = model("guild", new Schema({
    ID: String,
    prefix: String,
    logs: {
        message: String
    },

    blacklist: {
        isBlacklisted: { type: Boolean, default: false },
        reason: String,
        blacklistedAt: String,
        staff: String
    },
}))