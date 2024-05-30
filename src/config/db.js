const mongoose = require('mongoose');


const connection = async () => {
    console.log("Mongodb connected");
    return await mongoose.connect('mongodb://127.0.0.1/twitter_db_dev');
}
module.exports = connection;