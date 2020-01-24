const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const data = [{
    fn: 'Jade',
    ln: 'Suzarte',
    username: 'jszrt',
    password: '1234'
},
{
    fn: 'Dom',
    ln: 'Holm-Kander',
    username: 'dhkander',
    password: '5678'
},
{
    fn: 'Harry',
    ln: 'de Blaby',
    username: 'hdeb44',
    password: 'abcd'
},
{
    fn: 'Michael',
    ln: 'Laird',
    username: 'ml100',
    password: 'qwerty'
},
{
    fn: 'Dom',
    ln: 'McDonnell',
    username: 'the_dominator',
    password: 'coderlyfe'
},
{
    fn: 'Josh',
    ln: 'Torbett',
    username: 'jtrigger',
    password: 'glock'
}]

mongoClient.connect(url, function(err, db) {
    if (err) {
        throw err;
    }
    let dbo = db.db('habit_tracker');
    dbo.collection('users').drop();
    dbo.collection('users').insertMany(data, function (err, response) {
        if (err) {
            throw err;
        }
        console.log('data safely inserted');
        db.close();
    })
    
})

