// import React from 'react';
// import { queries } from '../scripts/queries';

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';

// const data = [{
//     fn: 'Jade',
//     ln: 'Suzarte',
//     username: 'jszrt',
//     password: '1234'
// },
// {
//     fn: 'Dom',
//     ln: 'Holm-Kander',
//     username: 'dhkander',
//     password: '5678'
// },
// {
//     fn: 'Harry',
//     ln: 'de Blaby',
//     username: 'hdeb44',
//     password: 'abcd'
// }]

// // function getAllUsers() {
// //     MongoClient.connect(url, function(err, db) {
// //         console.log('function is called!');
// //         if(err) throw err;
// //         const dbo = db.db('habit_tracker');
// //         let allUsers = dbo.collection('users').find({}).toArray(function(err, result) {
// //             if (err) throw err;
// //             db.close();
// //         });
// //         return allUsers;
// //     }); 
// // }


// describe('queries functions', () => {

//     it('should return all users from the database', () => {
//         let users = queries.getAllUsers();
//         expect(users().length).toEqual(3);
//         expect(users[0]).toHaveProperty('fn', 'Jade')
//         expect(users[0]).toHaveProperty('ln', 'Suzarte')
//         expect(users[0]).toHaveProperty('username', 'jszrt')
//         expect(users[0]).toHaveProperty('password', '1234')
//     })
// })