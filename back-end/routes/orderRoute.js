import express from "express";
import {
  createOrder,
  getAllOrders,
  updateOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrders);
orderRouter.post("/orders", createOrder);
orderRouter.patch("/patch-order-process/:_id", updateOrder);

export default orderRouter;
