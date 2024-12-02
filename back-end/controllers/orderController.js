import { orderModel } from "../model/order.model.js";

const createOrder = async (req, res) => {
  try {
    const {
      customer,
      orderNumber,
      foodIds,
      totalPrice,
      process,
      district,
      Khoroo,
      Apartment,
      phone,
      paymentType,
      detail,
    } = req.body;

    const result = await orderModel.create({
      customer,
      orderNumber,
      foodIds,
      totalPrice,
      process: process || "active",
      createDate: new Date(),
      district,
      Khoroo,
      Apartment,
      phone,
      paymentType: paymentType,
      detail,
    });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const result = await orderModel
      .find()
      .populate("customer")
      .populate("foodIds");

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { createOrder, getAllOrders };
