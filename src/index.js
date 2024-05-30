const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const  connection  = require('./config/db');
const Tweet = require('./models/tweet');
const Comment = require('./models/comment');
const TweetRepository = require('./repository/tweet-repository');

const setUpAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, async () => {
        console.log(`Server started at PORT:${PORT}`);
        
        await connection();

    });
}

setUpAndStartServer();