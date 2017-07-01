import Mongoose from 'mongoose';
import logger from '../core/logger/app-logger'
import config from '../core/config/config.dev'

const connectToDb = () => {
    let dbHost = config.db;
    Mongoose.connect(`mongodb://${dbHost}:27017/trains`, (err) => {
        if (err) {
            logger.error('Could not connect to MongoDB');
        }
        else {
            logger.info('Connected to mongo!!!');
        }
    });
}

export { connectToDb };