const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require ('cors')
const mongoose = require('mongoose')
const Router = express.Router();
const PORT = 4000;

let User = require('./models/user.model')
let Activity = require('./models/activities.model')


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect('mongodb://127.0.0.1:27017/habit_tracker', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

Router.route('/users').get((req, res) => {
    User.find()
    .then((users) => {
        res.json(users)
    })
    .catch((err) => {
        res.status(400).json('Error: ' + err);
    })
})

// Route for validating user details
Router.route('/users/:username').get((req, res) => {
    User.find({username : req.params.username})
    .then((user) => {
        res.json(user)
    })
    .catch((err) => {
        res.status(400).json('Error: ' + err);
    })
})

Router.route('/users/add').post((req, res) => {
    let user = new User(req.body)
    user.save()
    .then((users) => {
        res.status(200).json({'user' : 'user added successfully'})
        res.json(users)
    })
    .catch((err) => {
        res.status(400).json('Error: ' + err);
    })
})

Router.route('/activities/add').post((req, res) => {
    let activity = new Activity(req.body)
    activity.save()
    .then((users) => {
        res.status(200).json({'user' : 'activity added successfully'})
        res.json(users)
    })
    .catch((err) => {
        res.status(400).json('Error: ' + err);
    })
})

Router.route('/activities/:username').get((req, res) => {
    Activity.find({username : req.params.username})
    .then((activities) => {
        res.json(activities)
    })
    .catch((err) => {
        res.status(400).json('Error: ' + err)
    })
})

Router.route('/activities/find-by-name/:activityName').get((req, res) => {
    Activity.find({activityName : req.params.activityName})
    .then((activities) => {
        res.json(activities)
    })
    .catch((err) => {
        res.status(400).json('Error: ' + err);
    })
})

Router.route('/activities/update').get((req, res) => {
    Activity.updateMany({}, { $set: {completed: true}})
    Activity.save()
    .then(result => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

Router.route('/mark_task_as_complete').post((req, res) => {
    let now = new Date()
    Activity.findOneAndUpdate(
        {activityName: req.body.activityName},
        {completed: true,
            lastCompleted: now},
        {new: true}
        )
    .then((activity) => {
        activity.save();
        res.json(activity)
    })
    .catch((err) => {
        console.log(err)
    })
})
// payload for this route will be formatted {activityName (for finding the right task), newStreak(either 0 if resetting, or currentStreak+1 for updating)}
Router.route('/update_activity_streak').post((req, res) => {
    Activity.findOneAndUpdate(
        {activityName: req.body.activityName},
        {streak: req.body.newStreak},
        {new: true}
        )
    .then((activity) => {
        activity.save();
        res.json(activity)
    })
    .catch((err) => {
        console.log(err)
    })
})



app.use('/', Router);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
