const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String
    },
    email: {
        type: String
    }
})


module.exports = mongoose.model('User', UserSchema)