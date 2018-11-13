const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAppNew', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected');
    const db = client.db('TodoAppNew');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Something5'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Something5'}).then((result) => {
    //     console.log(result);
    // });
    
    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({_id: new ObjectID('5bea853ae7c9b56062107993')}).then((result) => {
        console.log(result);
    });

    client.close();
});