const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require ('cors')
const mongoose = require('mongoose')
const userRoutes = express.Router();
const PORT = 4000;

let User = require('./models/user.model')

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/habit_tracker', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

userRoutes.route('/').get((req, res) => {
        User.find()
        .then((users) => {
            console.log('asdklfjadsfj aodsj adf ij')
            res.json(users)
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        })
    })

userRoutes.route('/add').post((req, res) => {
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

app.use('/users', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});