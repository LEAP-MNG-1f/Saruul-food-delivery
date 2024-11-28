import mongoose, { model } from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const categoryModel = model("Category", categorySchema);
