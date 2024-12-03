"use client";

import { FC, useEffect, useState } from "react";
import { FoodItem } from "../_components/card/FilterCategory";
import _ from "lodash";

type TCustomer = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
};

export type OrderType = {
  _id: string;
  orderNumber: number;
  totalPrice: string;
  paymentType: string;
  phone: string;
  process: string;
  district: string;
  Khoroo: string;
  Apartment: string;
  detail: string;
  createDate: string;
  customer: TCustomer;
  foodIds: FoodItem[];
  __v: number;
};

type OrderPropsType = {
  value: OrderType;
};

type ApiResponse = {
  data: OrderType[];
};

export const Order: FC<OrderPropsType> = ({ value }) => {
  const [order, setOrder] = useState<OrderType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_POINT}/api/orders`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const datas: ApiResponse = await response.json();
        setOrder(datas.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const updatedProcess = async (orderId: string, newProcess: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_POINT}/api/patch-order-process/${orderId}`,
        {
          method: "PATCH", // Use PATCH for partial updates
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ process: newProcess }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Update the state with the updated order
      setOrder((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, process: newProcess } : order
        )
      );

      alert("Order process updated successfully!");
    } catch (error) {}
  };

  return (
    <div className="flex items-center border-t border-[#ECEDF0] bg-white rounded-b-xl">
      <div className="max-w-[230px] w-full py-3 px-6 flex items-center gap-2">
        <img
          src={_.first(value.foodIds)?.image}
          alt="food-item"
          className="w-[70px] h-14"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#121316] font-inter text-sm font-semibold leading-4 tracking-[-0.14px]">
            #{value.orderNumber}
          </p>
          <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
            {_.first(value.foodIds)?.name}
          </p>
        </div>
      </div>
      <div className="max-w-[140px] w-full py-3 px-6">
        <div className="flex flex-col justify-center">
          <p className="text-[#121316] font-inter text-sm font-semibold leading-4 tracking-[-0.14px]">
            {value.phone}
          </p>
          <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
            {value.customer.name}
          </p>
        </div>
      </div>
      <div className="max-w-[230px] w-full py-3 px-6">
        <div className="flex items-center">
          <div className="flex flex-col justify-center">
            <p className="text-[#121316] font-inter text-sm font-bold leading-4 tracking-[-0.14px]">
              {value.totalPrice}₮
            </p>
            <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
              {value.createDate}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[230px] w-full py-3 px-6">
        <p className="text-[#121316] font-inter text-sm font-normal tracking-[-0.28px]">
          {value.district}, {value.Khoroo}, {value.Apartment}, {value.detail}
        </p>
      </div>
      <div className="max-w-[127px] w-full py-3 px-6">
        <select
          value={value.process}
          onChange={(e) => updatedProcess(value._id, e.target.value)}
        >
          <option value="active">active</option>
          <option value="process">process</option>
          <option value="waiting">waiting</option>
          <option value="delivered">delivered</option>
        </select>
      </div>
    </div>
  );
};
