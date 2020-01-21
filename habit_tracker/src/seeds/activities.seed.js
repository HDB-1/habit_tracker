const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const data = [{
    username: 'jszrt',
    activityName: 'tennis',
    frequency: 'monthly',
    completed: false,
    isPriority: false,
    last_completed: '2019-12-16T14:34:43.432Z', //date bit might need touching up
    streak: 0
},
{
    username: 'jszrt',
    activityName: 'badminton',
    frequency: 'daily',
    completed: false,
    isPriority: true,
    last_completed: '2020-01-20T14:34:43.432Z', //date bit might need touching up
    streak: 2
},
{
    username: 'hdeb44',
    activityName: 'windsurfing',
    frequency: 'weekly',
    completed: true,
    isPriority: true,
    last_completed: '2020-01-18T11:34:43.432Z', //date bit might need touching up
    streak: 1
},
{
    username: 'hdeb44',
    activityName: 'biking',
    frequency: 'daily',
    completed: false,
    isPriority: false,
    last_completed: '2020-01-20T14:34:43.432Z', //date bit might need touching up
    streak: 1
},
{
    username: 'dhkander',
    activityName: 'read',
    frequency: 'daily',
    completed: true,
    isPriority: true,
    last_completed: '2020-01-21T13:43:43.432Z', //date bit might need touching up
    streak: 20
},
{
    username: 'dhkander',
    activityName: 'gym',
    frequency: 'weekly',
    completed: false,
    isPriority: true,
    last_completed: '2020-01-13T13:43:43.432Z', //date bit might need touching up
    streak: 0
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

