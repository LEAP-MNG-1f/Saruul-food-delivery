"use client";
import { useEffect, useState } from "react";

export type FoodItem = {
  id?: number;
  name: string;
  image: string;
  category: string;
  price: number;
  ingeredient: string;
};

const AllFood = () => {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [filteredFoodData, setFilteredFoodData] = useState<FoodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/foods");
      const responsedata = await response.json();
      const realData = responsedata?.data;
      setFoodData(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredFoodData(foodData);
  }, [foodData]);

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    const filtered = foodData.filter((food) => food.category === category);
    setFilteredFoodData(filtered);
  };

  const showAllFood = () => {
    setSelectedCategory("");
    setFilteredFoodData(foodData);
  };

  return (
    <div className="container max-w-[1200px] m-auto">
      <div className="flex justify-center mt-10 space-x-4">
        <button
          className={`px-[80px] py-3 font-bold rounded-lg ${
            selectedCategory === ""
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={showAllFood}
        >
          Бүгд
        </button>
        <button
          className={`px-[80px] py-3 font-bold rounded-lg ${
            selectedCategory === "Хямдралтай"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => filterByCategory("Хямдралтай")}
        >
          Хямдралтай
        </button>
        <button
          className={`px-[80px] py-3 font-bold rounded-lg ${
            selectedCategory === "Салад ба зууш"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => filterByCategory("Салад ба зууш")}
        >
          Салад ба зууш
        </button>
        <button
          className={`px-[80px] py-3 font-bold rounded-lg ${
            selectedCategory === "Амттан"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => filterByCategory("Амттан")}
        >
          Амттан
        </button>
        <button
          className={`px-[80px] py-3 font-bold rounded-lg ${
            selectedCategory === "Үндсэн хоол"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => filterByCategory("Үндсэн хоол")}
        >
          Үндсэн хоол
        </button>
      </div>
      {/* Food Items */}
      <div className="container m-auto mt-10 mb-10">
        <div className="grid grid-cols-4 gap-10">
          {filteredFoodData.map((food, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-2">{food.name}</h3>
              <p className="text-gray-500">{food.category}</p>
              <p className="text-green-500 font-semibold">{food.price}₮</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFood;
