import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import StarsIcon from "@mui/icons-material/Stars";
import { groupBy } from "lodash";
import { FoodItem } from "./FilterCategory";
import RecipeDialog from "./RecipeDialog";

export const Category = ({}) => {
  const [open, setOpen] = useState(false);
  const [foodDatas, setFoodDatas] = useState<FoodItem[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<FoodItem | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/foods");
      const responsedata = await response.json();
      const realData: FoodItem[] = responsedata?.data || [];
      setFoodDatas(realData);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const groupedData = groupBy(
    foodDatas,
    (foodData) => foodData.categoryId.name
  );

  const handleCardClick = (recipe: FoodItem) => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container mx-auto mt-24 max-w-[1200px]">
      {Object.entries(groupedData).map(([categoryTitle, categoryRecipes]) => (
        <div key={categoryTitle} className="mb-12">
          <h2 className="font-bold text-xl mb-8 flex items-center gap-2">
            <StarsIcon style={{ color: "green" }} />
            {categoryTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(categoryRecipes as FoodItem[]).map((recipe) => (
              <div
                key={recipe._id}
                onClick={() => handleCardClick(recipe)}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <Card
                  image={recipe.image || "https://via.placeholder.com/150"}
                  name={recipe.name || "Нэр байхгүй"}
                  price={recipe.price || 0}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedRecipe && (
        <RecipeDialog
          selectedRecipe={selectedRecipe}
          open={open}
          onClose={handleClose}
        />
      )}
    </div>
  );
};
