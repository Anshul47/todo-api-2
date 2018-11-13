// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var id = new ObjectID();
// console.log(id);

MongoClient.connect('mongodb://localhost:27017/TodoAppNew', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected');
    const db = client.db('TodoAppNew');

    // db.collection('Todos').insertOne({
    //     text: 'Something',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert to mongodb', err);
    //     }
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     //console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});