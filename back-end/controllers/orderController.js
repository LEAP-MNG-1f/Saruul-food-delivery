import { orderModel } from "../model/order.js";

const createOrder = (req, res) => {
  const result = orderModel.create({
    customer: "67468882c612a0d439bec45d",
    orderNumber: 3,
    foodIds: ["674693697262e70991b39eb9", "67469b88478790e320078e99"],
    totalPrice: 12000,
    process: "active",
    createDate: new Date(),
    district: "хан уул",
    Khoroo: "12-р хороо",
    Apartment: "Moriton residence",
  });
  res.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (req, res) => {
  const result = await orderModel.find().populate("customer");
  res.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
