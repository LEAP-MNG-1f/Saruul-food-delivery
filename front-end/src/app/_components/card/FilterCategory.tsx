"use client";

import { useEffect, useState } from "react";
import RecipeDialog from "./RecipeDialog";
import { uniqueId } from "lodash";

export type FoodItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
  categoryId: {
    _id: string;
    name: string;
    __v: number;
  };
  ingeredient: string;
  __v: number;
  quantity: number;
};

const AllFood = () => {
  const [open, setOpen] = useState(false);
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [filteredFoodData, setFilteredFoodData] = useState<FoodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRecipe, setSelectedRecipe] = useState<FoodItem | null>(null);
  const [cart, setCart] = useState<FoodItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/foods");
      const responsedata = await response.json();
      const realData = responsedata?.data;
      setFoodData(realData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredFoodData(foodData); // Display all foods by default
  }, [foodData]);

  // Handle category filtering
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "") {
      setFilteredFoodData(foodData);
    } else {
      setFilteredFoodData(
        foodData.filter((food) => food.categoryId._id === categoryId)
      );
    }
  };

  const handleCardClick = (recipe: FoodItem) => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uniqueCategories = Array.from(
    new Map(
      foodData.map((food) => [food.categoryId._id, food.categoryId])
    ).values()
  );

  return (
    <div className="container max-w-[1200px] m-auto mt-10">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          key="all"
          onClick={() => handleCategoryClick("")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Бүх хоол
        </button>
        {uniqueCategories.map((category) => (
          <button
            key={category._id}
            onClick={() => handleCategoryClick(category._id)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category._id
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Food Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {filteredFoodData.map((food) => (
          <div
            key={uniqueId()}
            onClick={() => handleCardClick(food)}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">{food.name}</h3>
            <p className="text-green-500 font-semibold">
              {food.price.toLocaleString()}₮
            </p>
          </div>
        ))}
        {selectedRecipe && (
          <RecipeDialog
            selectedRecipe={selectedRecipe}
            open={open}
            onClose={handleClose}
            onAddToCart={addToCart}
          />
        )}
      </div>
    </div>
  );
};

export default AllFood;
