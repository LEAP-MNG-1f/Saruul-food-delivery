import React, { useState, useEffect } from "react";
import { FoodItem } from "../card/FilterCategory";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DeleteIcon from "@mui/icons-material/Delete";
import BadgeVisibility from "./AddCountInModul";
import Link from "next/link";

// Update FoodItem interface to include quantity
export interface CartItem extends FoodItem {
  quantity: number;
}

export const DrawerContent = ({ onClose }: { onClose: () => void }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartWithQuantity = savedCart.map((item: FoodItem) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(cartWithQuantity);
  }, []);

  const removeFromCart = (itemToRemove: CartItem) => {
    const updatedCart = cartItems.filter(
      (item) => item._id !== itemToRemove._id
    );
    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

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

  return (
    <div className="p-4 ">
      <div className="flex gap-[180px] mb-7 mt-7">
        <button onClick={onClose} className="flex justify-center items-center">
          <ArrowBackIosNewIcon />
        </button>
        <h3 className="flex text-xl font-bold items-center justify-center">
          Таны сагс
        </h3>
      </div>
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
                <BadgeVisibility updateQuantity={updateQuantity} item={item} />
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="absolute top-2 right-2 text-red-500"
              >
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="fixed bottom-0 right-0 w-[532px]">
        <div className="p-4 flex justify-between">
          <p className="font-bold">Нийт дүн: ₮{totalPrice.toLocaleString()}</p>
          <Link href="/order">
            <button className="font-extrabold mr-17 bg-green-500 rounded-lg w-[200px] p-2">
              Захиалах
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
