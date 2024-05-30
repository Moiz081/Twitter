const Tweet = require('../models/tweet');

class TweetRepository {
    
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async getAll() {
        try {
            const tweet = await Tweet.find();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(data, id) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(data, id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;