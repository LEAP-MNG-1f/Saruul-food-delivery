import { foodModel } from "../model/food.js";

const createFood = (req, res) => {
  const result = foodModel.create({
    name: "шөлтэй хоол",
    image:
      "https://mnb.mn/uploads/202011/news/thumb/5582342f7105df355efc56329831dacb_x3.jpg",
    price: 11000,
    ingeredient: "барын хэл, могойн нүд",
  });
  res.json({
    success: true,
    data: result,
  });
};

const getAllFood = async (req, res) => {
  const result = await foodModel.find();
  res.json({
    success: true,
    data: result,
  });
};

export { createFood, getAllFood };
