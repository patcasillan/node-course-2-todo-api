var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (error) => {
        res.status(400).send(error);
    });
});

//Dynamic Input from user
app.get('/todos/:id', (req,res) => {
    id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send('Object ID is not valid.')
    }
    
    Todo.find({
        _id: id
    }).then((todo) => {
        if(todo) {
            res.send(todo);
        }
        else {
            res.status(404).send();
        }
    }, (error) => {
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000.');
})

module.exports = {
    app
};