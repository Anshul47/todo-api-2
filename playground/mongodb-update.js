const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAppNew', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected');
    const db = client.db('TodoAppNew');

    
    
    // findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bea84b1b70feb5fed2347a4')
    }, {
       $set: {
           completed: false
       } 
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});