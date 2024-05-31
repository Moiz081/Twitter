import Hashtag from '../models/hashtag';

class HashtagRepository {
    
    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const tag = await Hashtag.find();
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async update(data, id) {
        try {
            const tag = await Hashtag.findByIdAndUpdate(data, id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id) {
        try {
            const tag = await Hashtag.findByIdAndDelete(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
}

export default HashtagRepository;