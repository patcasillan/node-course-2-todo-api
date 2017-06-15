const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server.')
    }
    console.log('Connected to MongoDB server.')

//FindOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('593e13496de3a8bf428eec45')
    }, {
        $set: {
         completed: true   
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

//FindOneandUpdate and Increment
    db.collection('Users').findOneAndUpdate({
        name: 'Pat'
    }, {
        $set: {
            name: 'Patrick'
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
}); 
