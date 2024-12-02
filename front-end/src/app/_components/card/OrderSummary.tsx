import React, { useState, useEffect } from "react";
import { FoodItem } from "../card/FilterCategory";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DeleteIcon from "@mui/icons-material/Delete";
import BadgeVisibility from "./AddCountInModul";
import axios from "axios";
import { AddressForm } from "./Delivery";
import { log } from "console";

export interface CartItem extends FoodItem {
  quantity: number;
}

export const OrderSummary = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderDetails, setOrderDetails] = useState({
    district: "",
    khoroo: "",
    apartment: "",
    phone: "",
    paymentType: "",
    detail: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Load cart items from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartWithQuantity = savedCart.map((item: FoodItem) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(cartWithQuantity);
  }, []);

  const updateQuantity = (item: CartItem, newQuantity: number) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem._id === item._id
        ? { ...cartItem, quantity: Math.max(newQuantity, 1) }
        : cartItem
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const createOrder = async () => {
    if (
      !orderDetails.district ||
      !orderDetails.khoroo ||
      !orderDetails.apartment ||
      !orderDetails.phone ||
      !orderDetails.paymentType ||
      !orderDetails.detail
    ) {
      alert("Байршлын мэдээллээ бүрэн оруулна уу");
      return;
    }
    if (isLoading) return;

    try {
      setIsLoading(true);
      const orderPayload = {
        foodIds: cartItems.map((item) => item._id),
        totalPrice: totalPrice,
        customer: "67468882c612a0d439bec45d",
        orderNumber: Date.now(),
        district: orderDetails.district,
        Khoroo: orderDetails.khoroo,
        Apartment: orderDetails.apartment,
        process: "active",
        phone: orderDetails.phone,
        paymentType: orderDetails.paymentType,
        detail: orderDetails.detail,
      };
      console.log("Order Payload:", JSON.stringify(orderPayload, null, 2));

      // Send POST request to create order
      const response = await axios.post(
        "http://localhost:8000/api/orders",
        orderPayload
      );

      if (response.data.success) {
        localStorage.removeItem("cart");
        setCartItems([]);
        alert("Захиалга амжилттай хийгдлээ!");
      }
    } catch (error) {
      console.log(error);

      alert("Захиалга үүсгэхэд алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 flex gap-[300px]">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6 ">
        <h2 className="text-xl font-semibold text-gray-800">
          Хаягийн мэдээлэл оруулах
        </h2>
        <form className="space-y-4">
          {/* District Input */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="district"
            >
              Дүүрэг сонгоно уу
            </label>
            <input
              type="text"
              value={orderDetails.district}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, district: e.target.value })
              }
              id="district"
              placeholder="Жишээ: Баянзүрх, Чингэлтэй, Сүхбаатар..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Khoroo Input */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="khoroo"
            >
              Хороо сонгоно уу
            </label>
            <input
              type="text"
              value={orderDetails.khoroo}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, khoroo: e.target.value })
              }
              id="khoroo"
              placeholder="Жишээ: 1-р хороо, 2-р хороо, 3-р хороо..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Apartment/Street Input */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="apartment"
            >
              Байр, гудамж сонгоно уу
            </label>
            <input
              type="text"
              value={orderDetails.apartment}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, apartment: e.target.value })
              }
              id="apartment"
              placeholder="Жишээ: Сөүлийн гудамж, Токиогийн гудамж..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Additional Information */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="additional"
            >
              Нэмэлт мэдээлэл
            </label>
            <textarea
              value={orderDetails.detail}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, detail: e.target.value })
              }
              id="additional"
              placeholder="Жишээ: Орц, давхар, орцны код..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Phone Number */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Утасны дугаар<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={orderDetails.phone}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, phone: e.target.value })
              }
              id="phone"
              placeholder="Утасны дугаараа оруулна уу"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Payment Type */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="paymentType"
                value="Бэлнээр"
                checked={orderDetails.paymentType === "Бэлнээр"}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    paymentType: e.target.value,
                  })
                }
                className="form-radio text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2">Бэлнээр</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="paymentType"
                value="Картаар"
                checked={orderDetails.paymentType === "Картаар"}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    paymentType: e.target.value,
                  })
                }
                className="form-radio text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2">Картаар</span>
            </label>
          </div>
        </form>
      </div>
      <div className="flex flex-col">
        {cartItems.length === 0 ? (
          <p className="flex justify-center p-5">Сагс хоосон байна.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex mb-4 w-[500px] gap-6 border-b border-t p-4 relative"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[250px] h-[140px] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-[12px]">{item.ingeredient}</span>
                  <span className="text-green-500">
                    ₮{(item.price * item.quantity).toLocaleString()}
                  </span>
                  <BadgeVisibility
                    updateQuantity={updateQuantity}
                    item={item}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-right">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Нийт төлөх дүн:</p>
              <p className="text-green-600 text-2xl font-bold">
                {totalPrice.toLocaleString()}
              </p>
            </div>
            <button
              onClick={createOrder}
              disabled={isLoading || cartItems.length === 0}
              className={`font-extrabold mr-17 rounded-lg w-[200px] p-2 ${
                isLoading || cartItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500"
              }`}
            >
              {isLoading ? "Захиалж байна..." : "Захиалах"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
