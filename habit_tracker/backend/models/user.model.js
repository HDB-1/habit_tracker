const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let User = new Schema({
    fn: {
        type: String
    },
    ln: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('User', User)