const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAppNew', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected');
    const db = client.db('TodoAppNew');

    /* Fetch All */

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to connect to mongodb server');
    // });

    /* Fetch with Where */

    // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to connect to mongodb server');
    // });

    /* Fetch with Where id */

    // db.collection('Todos').find({_id: new ObjectID('5be978d8c4375b33dee8e8fb')}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to connect to mongodb server');
    // });

    /* Fetch Count */

    db.collection('Todos').find().count().then((count) => {
        console.log(`Total Count: ${count}`);
    }, (err) => {
        console.log('Unable to connect to mongodb server');
    });

    //client.close();
});