import React from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Header() {
  return (
    <div className="flex flex-row gap-2 justify-around mt-[100px]">
      <div className="flex gap-6">
        <LocalDiningIcon style={{ width: "40px", height: "40px" }} />
        <Button variant="text" style={{ color: "black" }}>
          нүүр
        </Button>
        <Button variant="text" style={{ color: "black" }}>
          хоолны цэс
        </Button>
        <Button variant="text" style={{ color: "black" }}>
          хүргэлтийн бүс
        </Button>
      </div>
      <div>
        <IconButton color="inherit" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
          <p>сагс</p>
        </IconButton>
      </div>
    </div>
  );
}