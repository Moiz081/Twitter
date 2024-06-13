import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './config/db.js';

// import HashtagRepository from './repository/hashtag-repository.js';
import TweetService from './services/tweet-services.js';

const setUpAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(3000, async () => {
        console.log(`Server started at PORT:${3000}`);
        await connect();

        // const hashtags = new HashtagRepository();
        // const response = await hashtags.bulkCreate(
        //     {
        //         title: '#excites',
        //         tweets: []
        //     },
        //     {
        //         title: '#bore',
        //         tweets: []
        //     },
        //     {
        //         title: '#coding',
        //         tweets: []
        //     },
        //     {
        //         title: '#fun',
        //         tweets: []
        //     }
        // )
        
        const tweet = new TweetService();
        const response = await tweet.create({
            content: 'This is my #first tweet, #excited #nice day'
        })
        console.log(response);

    });
}

setUpAndStartServer();