import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FoodItem } from "./FilterCategory";
import BadgeVisibility from "./AddCountInModul";
import { colors, ListItem, ListItemButton, ListItemText } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";

interface RecipeDialogProps {
  open: boolean;
  selectedRecipe: FoodItem | null; // FoodItem ашиглана
  onClose: () => void;
}

function RecipeDialog(props: RecipeDialogProps) {
  const { onClose, selectedRecipe, open } = props;

  if (!selectedRecipe) return null;

  return (
    <Dialog onClose={onClose} open={open} maxWidth="md" fullWidth>
      <div className="relative">
        <IconButton
          onClick={onClose}
          className="absolute left-2 top-2 z-10"
          size="small"
        >
          <CloseIcon />
        </IconButton>
        <div className="p-6">
          <div className="flex gap-10">
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-80 h-[290px] object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold text-2xl">{selectedRecipe.name}</h3>
              <div className="text-lg text-green-600 font-bold">
                ₮{selectedRecipe.price.toLocaleString()}
              </div>
              <div className="mt-3">
                <h4 className="font-bold text-lg">Орц:</h4>
                <p>{selectedRecipe.ingeredient}</p>
              </div>
              <div className="mt-3">
                <p className="font-bold text-[20px] mt-2">тоо</p>
                <BadgeVisibility />
              </div>
              <ListItem disableGutters>
                <ListItemButton
                  style={{ background: "green", borderRadius: "15px" }}
                  autoFocus
                  // onClick={() => handleListItemClick("addAccount")}
                >
                  <ListItemText
                    primary="Сагслах"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export const Category: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<FoodItem | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/foods");
      const responsedata = await response.json();
      const realData: FoodItem[] = responsedata?.data || [];
      setFoodData(realData);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCardClick = (recipe: FoodItem) => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container mx-auto mt-24 max-w-[1200px]">
      {categories.map((categoryTitle) => {
        const categoryRecipes = foodData.filter(
          (recipe) => recipe.category === categoryTitle
        );

        return (
          <div key={categoryTitle} className="mb-12">
            <h2 className="font-bold text-xl mb-8 flex items-center gap-2">
              <StarsIcon style={{ color: "green" }} />
              {categoryTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryRecipes.map((recipe, index) => (
                <div
                  key={index}
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
        );
      })}

      <RecipeDialog
        selectedRecipe={selectedRecipe}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};
