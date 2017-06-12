const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server.')
    }
    console.log('Connected to MongoDB server.')

//Delete Many
    // db.collection('Users').deleteMany({
    //     name: 'Pat'
    // }).then((result) => {
    //     console.log(result);
    // });

//DeleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

//FindOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('593782566601c80514c1cb19')
    }).then((result) => {
        console.log(result);
    });

    db.close();
}); 
