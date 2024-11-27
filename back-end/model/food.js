import mongoose, { model } from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingeredient: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const foodModel = model("Food", foodSchema);
