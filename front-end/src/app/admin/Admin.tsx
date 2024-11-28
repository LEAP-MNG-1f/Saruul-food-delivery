import React, { useEffect, useState } from "react";
import { Card } from "../_components/card/Card";

import CreateFoodModal from "./AddModal";

interface MenuCategory {
  id: number;
  name: string;
}

const MENU_CATEGORIES: MenuCategory[] = [
  { id: 1, name: "хямдралтай" },
  { id: 2, name: "амттан" },
  { id: 3, name: "үндсэн хоол" },
  { id: 4, name: "Салад ба зууш" },
];

interface MenuCategoryButtonProps {
  name: string;
  isActive?: boolean;
}

const MenuCategoryButton: React.FC<MenuCategoryButtonProps> = ({
  name,
  isActive = false,
}) => (
  <button
    className={`btn justify-between w-full mb-2 text-lg font-normal hover:bg-[#18BA51] hover:text-white ${
      isActive ? "bg-[#18BA51] text-white" : "text-gray-700"
    }`}
  >
    {name}
  </button>
);

type Food = {
  id: number;
  name: string;
  price: number;
  image: string;
  ingeredient?: string;
};

type ApiResponse = {
  data: Food[];
};

const MainAdminPage: React.FC = () => {
  const [foodsData, setFoodsData] = useState<Food[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/foods");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const datas: ApiResponse = await response.json();
        setFoodsData(datas.data);
      } catch (err) {
        console.error("Failed to fetch foods:", err);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[15vw] p-6 border-r">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Food menu</h1>

        <div className="space-y-2 mb-6">
          {MENU_CATEGORIES.map((category) => (
            <MenuCategoryButton
              key={category.id}
              name={category.name}
              isActive={category.name === "хямдралтай"}
            />
          ))}
        </div>

        <button className="btn btn-outline w-full text-gray-600">
          Create new category
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-[69.2vw] p-6 bg-gray-50">
        <div className="w-[50%] flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">хямдралтай</h2>
          <CreateFoodModal />
        </div>

        <div className="w-[53vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodsData.map((dish, index) => (
            <Card
              key={index}
              name={dish.name}
              image={dish.image}
              price={dish.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainAdminPage;
