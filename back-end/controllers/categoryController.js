import { categoryModel } from "../model/category.model.js";

const createCategory = (req, res) => {
  const result = categoryModel.create({
    name: "үндсэн хоол",
  });
  res.json({
    success: true,
    data: result,
  });
};

const getAllCategory = async (req, res) => {
  const result = await categoryModel.find();
  res.json({
    success: true,
    data: result,
  });
};

export { createCategory, getAllCategory };
