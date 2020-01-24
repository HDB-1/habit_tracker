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
    isPriority: false,
    lastCompleted: new Date(2020, 0, 20, 14, 34, 43, 43),
    streak: 2
},
{
    username: 'jszrt',
    activityName: 'feed dogs',
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
    activityName: 'downhill biking',
    frequency: 'daily',
    completed: false,
    isPriority: false,
    lastCompleted: new Date(2020, 0, 18, 14, 34, 43, 43),
    streak: 5
},
{
    username: 'hdeb44',
    activityName: 'motocross',
    frequency: 'weekly',
    completed: false,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 7
},
{
    username: 'dhkander',
    activityName: 'read',
    frequency: 'daily',
    completed: true,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 5
},
{
    username: 'dhkander',
    activityName: 'gym',
    frequency: 'weekly',
    completed: false,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 20, 14, 34, 43, 43),
    streak: 5
},
{
    username: 'dhkander',
    activityName: 'write book',
    frequency: 'daily',
    completed: false,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 3
},
{
    username: 'ml100',
    activityName: 'watch tv',
    frequency: 'weekly',
    completed: false,
    isPriority: false,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 2
},
{
    username: 'ml100',
    activityName: 'cook dinner',
    frequency: 'daily',
    completed: false,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 17
},
{
    username: 'ml100',
    activityName: '1hr of codewars',
    frequency: 'monthly',
    completed: false,
    isPriority: true,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 1
},
{
    username: 'the_dominator',
    activityName: 'teach people',
    frequency: 'daily',
    completed: true,
    isPriority: false,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 19
},
{
    username: 'the_dominator',
    activityName: 'listen to music',
    frequency: 'daily',
    completed: true,
    isPriority: false,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
    streak: 12
},
{
    username: 'the_dominator',
    activityName: 'birdwatch',
    frequency: 'monthly',
    completed: false,
    isPriority: false,
    lastCompleted: new Date(2020, 0, 22, 14, 34, 43, 43),
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

