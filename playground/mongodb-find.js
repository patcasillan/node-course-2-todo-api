// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server.')
    }
    console.log('Connected to MongoDB server.')

//Select Function: Find
    // db.collection('Todos').find({
    //     // completed: false
    //     _id: new ObjectID('593df0de6de3a8bf428eea30')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos.',err);
    // });

//Count Function
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Number of Todos: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos.',err);
    // });

    db.collection('Users').find({
        name: 'Pat'
    }).toArray().then((users) => {
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch user data.');
    });

    db.collection('Users').find({
        name: 'Pat'
    }).count().then((count) => {
        console.log(`Number of users (Pat): ${count}`);
    }, (err) => {
        console.log('Unable to fetch user data.');
    });

    db.close();
}); 
