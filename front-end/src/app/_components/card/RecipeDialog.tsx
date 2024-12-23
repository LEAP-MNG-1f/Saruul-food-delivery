import React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FoodItem } from "./FilterCategory";

interface RecipeDialogProps {
  open: boolean;
  selectedRecipe: FoodItem | null;
  onClose: () => void;
}

const RecipeDialog: React.FC<RecipeDialogProps> = ({
  open,
  selectedRecipe,
  onClose,
}) => {
  if (!selectedRecipe) return null;

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, selectedRecipe];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    onClose();
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
              <div className="mt-3 mb-[80px]">
                <h4 className="font-bold text-lg mt-10">Орц:</h4>
                <p>{selectedRecipe.ingeredient}</p>
              </div>
              <ListItem disableGutters>
                <ListItemButton
                  style={{ background: "green", borderRadius: "15px" }}
                  autoFocus
                  onClick={handleAddToCart}
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
