import React, { useEffect, useMemo, useState } from "react";
import { Card } from "../_components/card/Card";
import CreateFoodModal from "./AddModal";
import { FoodItem } from "../_components/card/FilterCategory";
import CreateFood from "./CreateFood";
import Link from "next/link";
import { BACKEND_POINT } from "../constant";

const MainAdminPage: React.FC = () => {
  const [foodsData, setFoodsData] = useState<FoodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | "">("");
  const [filteredFoodData, setFilteredFoodData] = useState<FoodItem[]>([]);
  const [isModalOpenFood, setIsModalOpenFood] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_POINT}/api/foods`);
      const responsedata = await response.json();
      const realData = responsedata?.data;
      setFoodsData(realData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredFoodData(foodsData); // Display all foods by default
  }, [foodsData]);

  // Handle category filtering
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "") {
      setFilteredFoodData(foodsData); // Show all if no category selected
    } else {
      setFilteredFoodData(
        foodsData.filter((food) => food.categoryId._id === categoryId)
      );
    }
  };

  const uniqueCategories = Array.from(
    new Map(
      foodsData.map((food) => [food.categoryId._id, food.categoryId])
    ).values()
  );

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[15vw] p-6 border-r">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Food menu</h1>
        <div className="space-y-2 mb-6">
          {uniqueCategories.map((category) => (
            <button
              key={category._id}
              className={`btn justify-between w-full text-lg font-normal hover:bg-[#18BA51] hover:text-white ${
                selectedCategory === category._id
                  ? "bg-[#18BA51] text-white"
                  : "text-gray-700"
              }`}
              onClick={() => handleCategoryClick(category._id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}

      <div className="flex-1 w-[69.2vw] p-6 bg-gray-50">
        <button
          onClick={() => setIsModalOpenFood(true)}
          className="bg-[#18BA51] px-4 py-2 text-[#fff] text-base font-normal rounded mb-5 mr-4"
        >
          Add new food
        </button>
        <Link href="/admindashboard">
          <button className="bg-[#18BA51] px-4 py-2 text-[#fff] text-base font-normal rounded mb-5">
            Open Admindashboard
          </button>
        </Link>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFoodData.map((dish) => (
            <Card
              key={dish._id}
              name={dish.name}
              image={dish.image}
              price={dish.price}
            />
          ))}
        </div>
      </div>
      {isModalOpenFood && (
        <CreateFood setIsModalOpenFood={setIsModalOpenFood} />
      )}
    </div>
  );
};

export default MainAdminPage;
