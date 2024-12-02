import mongoose, { model } from "mongoose";

const processEnum = {
  values: ["active", "waiting", "progress", "delivered"],
};

const paymentTypeEnum = {
  values: ["Бэлнээр", "Картаар"],
};

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foodIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
      required: true,
    },
  ],
  totalPrice: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    enum: processEnum,
    default: "active",
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  Khoroo: {
    type: String,
    required: true,
  },
  Apartment: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    enum: paymentTypeEnum,
    required: true,
  },
  detail: { type: String },
});

export const orderModel = model("Order", orderSchema);
