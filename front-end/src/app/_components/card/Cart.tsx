import React, { useState, useEffect } from "react";
import { FoodItem } from "../card/FilterCategory";

export const DrawerContent = ({ onClose }: { onClose: () => void }) => {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold">Сагс</h3>
      {cartItems.length === 0 ? (
        <p>Сагс хоосон байна.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between mb-4">
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <span>{item.name}</span>
              </div>
              <span>₮{item.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      )}
      <button onClick={onClose}>Хаах</button>
    </div>
  );
};
