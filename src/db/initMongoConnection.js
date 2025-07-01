import { getEnvVar } from '../utils/getEnvVar.js';
import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    const password = getEnvVar('MONGODB_PASSWORD');
    const user = getEnvVar('MONGODB_USER');
    const url = getEnvVar('MONGODB_URL');
    const dataBase = getEnvVar('MONGODB_DB');
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${dataBase}?retryWrites=true&w=majority&appName=Cluster0`,
      console.log('Successufully connection to database'),
    );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
