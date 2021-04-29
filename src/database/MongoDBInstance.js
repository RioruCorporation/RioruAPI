const mongoose = require('mongoose')

module.exports = class MongoDBInstance {
    constructor(mongoConnection) {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

        mongoose.connect(mongoConnection, options, e => {
            if(e) console.error(e) 
            else console.log("Database conectada")
        })
        
        return {
            ...this,
            models: {
                user: require("./models/UserModel")
            }
        }
    }
}