const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Activities = new Schema({
    username: {
        type: String
    },
    activityName: {
        type: String
    },
    frequency: {
        type: String
    },
    completed: {
        type: Boolean
    },
    isPriority: {
        type: Boolean
    },
    lastCompleted: {
        type: String
    },
    streak: {
        type: Number
    },
    __v: {
        type: Number
    }

});

module.exports = mongoose.model('Activities', Activities)