import TweetRepository from '../repository/index';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data) {
        try {
            const content = data.content;
            const tags = content.match('/#[A-Za-z0-9_]+/g'); // returns extracted hashtags
            tags = tags.map((tag) => tag.substring(1));
            console.log(tags);
            const tweet = await this.tweetRepository.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetService;