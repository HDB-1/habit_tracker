const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const data = [{
    username: 'jszrt',
    activityName: 'tennis',
    frequency: 'monthly',
    completed: false,
    isPriority: false,
    lastCompleted: new Date(2019, 11, 16, 14, 34, 43, 43),
    streak: 4
},
{
    username: 'jszrt',
    activityName: 'badminton',
    frequency: 'daily',
    completed: false,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 20, 14, 34, 43, 43),
    streak: 2
},
{
    username: 'hdeb44',
    activityName: 'windsurfing',
    frequency: 'weekly',
    completed: true,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 1000
},
{
    username: 'hdeb44',
    activityName: 'biking',
    frequency: 'daily',
    completed: false,
    isPriority: false,
    lastCompleted: new Date(2020, 0, 18, 14, 34, 43, 43),
    streak: 5
},
{
    username: 'dhkander',
    activityName: 'read',
    frequency: 'daily',
    completed: true,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 5,
},
{
    username: 'dhkander',
    activityName: 'gym',
    frequency: 'weekly',
    completed: false,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 20, 14, 34, 43, 43),
    streak: 5
}
]

mongoClient.connect(url, function(err, db) {
    if (err) {
        throw err;
    }
    let dbo = db.db('habit_tracker');
    dbo.collection('activities').drop();
    dbo.collection('activities').insertMany(data, function (err, response) {
        if (err) {
            throw err;
        }
        console.log('data safely inserted');
        db.close();
    })
    
})

