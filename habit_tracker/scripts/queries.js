const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';





export function allUsers() {
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        const dbo = db.db('habit_tracker');
        let allUsers = dbo.collection('users').find({}).toArray(function(err, result) {
            if (err) throw err;
            db.close();
        });
        return allUsers;
    }); 
}
