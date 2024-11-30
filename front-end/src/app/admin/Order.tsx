"use client";

import { FC } from "react";

export type OrderType = {
  orderNumber: number;
  totalPrice: string;
  process: string;
  createdDate: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: string;
  information: string;
};
type OrderPropsType = {
  value: Order;
};

export const Order: FC<OrderPropsType> = ({ value }) => {
  return (
    <div className="flex items-center border-t border-[#ECEDF0] bg-white rounded-b-xl">
      <div className="max-w-[230px] w-full py-3 px-6 flex items-center gap-2">
        <img src=".." className="w-10 h-10" />
        <div className="flex flex-col justify-center">
          <p className="text-[#121316] font-inter text-sm font-semibold leading-4 tracking-[-0.14px]">
            #{value.orderNumber}
          </p>
          <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
            Breakfast
          </p>
        </div>
      </div>
      <div className="max-w-[140px] w-full py-3 px-6">
        <div className="flex flex-col justify-center">
          <p className="text-[#121316] font-inter text-sm font-semibold leading-4 tracking-[-0.14px]">
            {value.phoneNumber}
          </p>
          <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
            Boldoo
          </p>
        </div>
      </div>
      <div className="max-w-[230px] w-full py-3 px-6">
        <div className="flex items-center">
          <div className="flex flex-col justify-center">
            <p className="text-[#121316] font-inter text-sm font-bold leading-4 tracking-[-0.14px]">
              {value.price}₮
            </p>
            <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
              {value.createdDate}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[230px] w-full py-3 px-6">
        <p className="text-[#121316] font-inter text-sm font-normal tracking-[-0.28px]">
          {value.district}, {value.khoroo}, {value.apartment},{" "}
          {value.information}
        </p>
      </div>
      <div className="max-w-[127px] w-full py-3 px-6">
        <div className="px-[6px] bg-[#C1E6CF] rounded-full">
          <p className="text-[#0A4E22] font-inter text-sm font-normal tracking-[-0.28px]">
            {value.process}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
