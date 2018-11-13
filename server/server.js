const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


//Insert New Todo
app.post('/todo', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// Get All Todo
app.get('/todo', (req, res) => {
    Todo.find(null ,null , {
            sort:{
                completedAt: -1 //Sort by Date Added DESC
            }
        
    }).then((todos) => {
        res.send({
            data: todos 
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

// Get Todo By ID
app.get('/todo/:id', (req, res) => {
    var id = req.params.id;
    if(ObjectID.isValid(id)){

        Todo.find({
            _id: id
        }).then((todos) => {
            res.send({
                data: todos
            });
        }, (e) => {
            res.status(400).send(e);
        });
        
    }else{
        res.status(404).send();
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});