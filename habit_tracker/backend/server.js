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
    console.log(req.body)
    let user = new User(req.body)
    
    console.log('You are trying to add this!!!!!' + req.body)
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
    // console.log(req.body)
    let activity = new Activity(req.body)
    
    console.log('You are trying to add this!!!!!' + req.body)
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


// var url = "mongodb://127.0.0.1:27017/";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("habit_tracker");
//     var myquery = { activityName: "gym" };
//     var newvalues = { $set: {isPriority: false} };
//     dbo.collection("activities").updateOne(myquery, newvalues, function(err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       db.close();
//     });
//   });

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
    // console.log(req.body)
    Activity.findOneAndUpdate({activityName: req.body.activityName}, {completed: true}, {new: true})
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
