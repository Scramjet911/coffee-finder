import mongoose from 'mongoose';
import logger from '../utils/logger';

const uri = process.env.MONGODB_URI || '';

if (!uri) {
  logger.error('MongoDB connection URI is not defined in environment variables');
  process.exit(1);
}

const connect = async () => {
  try {
    await mongoose.connect(uri);
    logger.info('MongoDB connected');
  } catch (error) {
    logger.error(`MongoDB connection failed`, error);
  }
};

export default connect;
