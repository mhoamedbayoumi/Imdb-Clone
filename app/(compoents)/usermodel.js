import { Schema } from "mongoose";
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Age is required'],
    },
    movieName:{
     type:String,
     required:[true,"Movie name is required"]
    },
    movieDescription:{
        type:String,
        required:[true,"Movie Description is required"]
    },
  });
  
export default mongoose.models.UserModel || mongoose.model('UserModel', UserSchema);