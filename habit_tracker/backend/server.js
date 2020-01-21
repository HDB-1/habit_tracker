const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require ('cors')
const mongoose = require('mongoose')
const Router = express.Router();
const PORT = 4000;

let User = require('./models/user.model')
let Activity = require('./models/activities.model')

app.use('/', Router);

app.use(cors());
app.use(bodyParser.json());


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
    console.log(req.body)
    user.save()
    .then((users) => {
        res.status(200).json({'user' : 'user added successfully'})
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




app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
