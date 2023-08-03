import mongoose from "mongoose";

const useCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: { type: String, index: true },

  email: {
    type: String,
    unique: true,
  },
  gender: String,
});

export const userModel = mongoose.model(useCollection, userSchema);
