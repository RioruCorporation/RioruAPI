const { Schema, model } = require("mongoose");

module.exports = model(
    "user", 
    new Schema({
        ID: String,
        blacklist: {
            isBlacklisted: { type: Boolean, default: false },
            reason: String,
            blacklistedAt: String,
            staff: String
        },
        wishes: {
            total: String,
            actions: [{ paymentID: String, action: String, value: String }]
        }
    })
)