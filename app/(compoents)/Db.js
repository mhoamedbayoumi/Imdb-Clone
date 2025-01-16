import mongoose from "mongoose";
const MONGODB_URI = process.env.db_url;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}
const connect = async () => {
    try {
      await mongoose.connect(MONGODB_URI);
    } catch (error) {
      throw new Error("Connection failed!");
    }
  };
  
export default connect;