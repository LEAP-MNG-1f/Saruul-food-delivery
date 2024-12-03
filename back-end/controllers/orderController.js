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

const updateOrder = async (request, response) => {
  try {
    const { _id } = request.params; // Ensure `_id` is extracted correctly

    console.log(_id);

    // Validate _id
    if (!_id || !_id.match(/^[0-9a-fA-F]{24}$/)) {
      return response.status(400).json({
        success: false,
        message: "Invalid or missing order ID",
      });
    }

    // Extract fields to update from request body
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
    } = request.body;

    // Update the order in the database
    const result = await orderModel.findByIdAndUpdate(
      _id,
      {
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
      },
      { new: true, runValidators: true } // Options to return the updated document and validate data
    );

    // Check if the order was found and updated
    if (!result) {
      return response.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    // Respond with success and updated order data
    response.json({ success: true, data: result });
  } catch (error) {
    console.error("Error updating order:", error);

    // Respond with a generic server error message
    response.status(500).json({
      success: false,
      message: "An error occurred while updating the order",
    });
  }
};

export { createOrder, getAllOrders, updateOrder };
