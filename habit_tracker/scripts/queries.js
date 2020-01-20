const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';





function getAllUsers() {
    MongoClient.connect(url, function(err, db) {
        console.log('function is called!');
        if(err) throw err;
        const dbo = db.db('habit_tracker');
        let users = dbo.collection('users').find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            db.close();
        });
        return users;
    }); 
}
getAllUsers();