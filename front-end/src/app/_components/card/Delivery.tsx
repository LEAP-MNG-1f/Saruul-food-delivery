"use client";
import { Order } from "@/app/admin/Order";
import { DataSaverOff } from "@mui/icons-material";
import React, { useState } from "react";
import { OrderSummary } from "./OrderSummary";

export const AddressForm = () => {
  // const [orderDetails, setOrderDetails] = useState({
  //   district: "",
  //   khoroo: "",
  //   apartment: "",
  // });
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Хаягийн мэдээлэл оруулах
      </h2>
      <form className="space-y-4">
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="district"
          >
            Дүүрэг сонгоно уу
          </label>
          <select
            id="district"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Сонгох...</option>
            <option value="bayanzurkh">Баянзүрх</option>
            <option value="bayanzurkh">Чингэлтэй</option>
            <option value="sukhbaatar">Сүхбаатар</option>
            <option value="sukhbaatar">Сонгино хайрхан</option>
            <option value="sukhbaatar">Хан уул</option>
          </select>
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="khoroo"
          >
            Хороо сонгоно уу
          </label>
          <select
            id="khoroo"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Сонгох...</option>
            <option value="1">1-р хороо</option>
            <option value="2">2-р хороо</option>
            <option value="2">3-р хороо</option>
            <option value="2">4-р хороо</option>
            <option value="2">5-р хороо</option>
            <option value="2">6-р хороо</option>
          </select>
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="street"
          >
            Байр, гудамж сонгоно уу
          </label>
          <select
            id="street"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Сонгох...</option>
            <option value="street1">Сеэөлийн гудамж</option>
            <option value="street2">Токиогийн гудамж</option>
            <option value="street2">Нев ёоркын гудамж</option>
          </select>
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="additional"
          >
            Нэмэлт мэдээлэл
          </label>
          <textarea
            id="additional"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Орц, давхар, орцны код..."
          ></textarea>
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="phone"
          >
            Утасны дугаар<span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Утасны дугаараа оруулна уу"
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2">Бэлнээр</span>
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2">Картаар</span>
          </label>
        </div>
      </form>
    </div>
  );
};
