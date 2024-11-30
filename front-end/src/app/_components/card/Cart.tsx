import React, { useState, useEffect } from "react";
import { FoodItem } from "../card/FilterCategory";
import BadgeVisibility from "./AddCountInModul";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const DrawerContent = ({ onClose }: { onClose: () => void }) => {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  // mount uyd localstorage oos cart dah buteegdehuunee awchrah
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

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
              className="flex mb-4 w-[500px] gap-6 border-b border-t p-4 overflow-y-scroll"
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
                <span className="text-green-500">
                  ₮{item.price.toLocaleString()}
                </span>
                <span className="text-[12px]">{item.ingeredient}</span>
                <BadgeVisibility />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="fixed bg-green-500 w-full mb-3">
        <div className="p-4">
          <p>нийт дүн : </p>
        </div>
      </div>
    </div>
  );
};
