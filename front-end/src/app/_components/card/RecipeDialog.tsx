import React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import BadgeVisibility from "./AddCountInModul";
import { FoodItem } from "./FilterCategory";

interface RecipeDialogProps {
  open: boolean;
  selectedRecipe: FoodItem | null; // FoodItem ашиглана
  onClose: () => void;
  onAddToCart: (item: FoodItem) => void;
}

const RecipeDialog: React.FC<RecipeDialogProps> = ({
  open,
  selectedRecipe,
  onClose,
  onAddToCart,
}) => {
  if (!selectedRecipe) return null;

  // Handle adding to cart and saving to localStorage
  const handleAddToCart = () => {
    // Check if cart already exists in localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Add the new item to the cart
    const updatedCart = [...existingCart, selectedRecipe];

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Call the provided onAddToCart function, in case it's needed elsewhere
    onAddToCart(selectedRecipe);
  };

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
                  onClick={handleAddToCart} // Updated function call
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
};

export default RecipeDialog;
