import { foodModel } from "../model/food.model.js";
import { body, validationResult } from "express-validator";

const createFood = [
  // Шалгалт хийх
  body("name").not().isEmpty().withMessage("name талбар нь шаардлагатай."),
  body("price").isNumeric().withMessage("price талбар тоо байх ёстой."),
  body("categoryId")
    .not()
    .isEmpty()
    .withMessage("categoryId талбар нь шаардлагатай."),
  body("image").not().isEmpty().withMessage("image талбар нь шаардлагатай."),

  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    try {
      const { name, price, categoryId, image, ingredient } = request.body;
      const result = await Food.create({
        name,
        price,
        categoryId,
        image,
        ingredient,
      });

      response.status(201).json({
        success: true,
        data: result,
      });
    } catch (error) {
      console.error("Алдаа гарлаа:", error.message);
      response.status(500).json({
        success: false,
        message: "Серверт алдаа гарлаа. Дараа дахин оролдоно уу.",
        error: error.message,
      });
    }
  },
];

const getAllFood = async (req, res) => {
  try {
    const result = await foodModel.find().populate("categoryId");
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Хоол get хийхэд алдаа гарлаа:", error.message);
    return res.status(500).json({
      success: false,
      message: "Хоолын мэдээллийг get хийхэд алдаа гарлаа.",
      error: error.message,
    });
  }
};

export { createFood, getAllFood };
