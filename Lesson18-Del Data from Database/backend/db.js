 
const myMongoose = require('mongoose');
 
// Saving my MongoDB URI
const mongoURL = "mongodb://127.0.0.1:27017/crudOpDB";
 
// Creating a function to connect to MongoDB
const connectToMongo = async () => {
    try {
        await myMongoose.connect(mongoURL);
        console.log('Connected to MongoDB-crudOpDB');
    } catch (e) {
        console.error('Error connecting to MongoDB:', e.message);
    }
};
 
// Exporting the module (db.js) with connectToMongo function
module.exports = connectToMongo;