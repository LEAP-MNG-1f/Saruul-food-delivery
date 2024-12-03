"use client";
import React, { useState } from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Drawer } from "@mui/material";
import { DrawerContent } from "../card/Cart";
import Link from "next/link";

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-row gap-2 mt-[20px] container m-auto justify-between max-w-[1200px]">
      <div className="flex gap-6 items-center">
        <LocalDiningIcon style={{ width: "40px", height: "40px" }} />
        <Link href="/" className="group">
          <Button
            variant="text"
            className="text-black hover:text-blue-500 relative group-hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
          >
            нүүр
          </Button>
        </Link>
        <Link href="categories" className="group">
          <Button
            variant="text"
            className="text-black hover:text-green-500 relative group-hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
          >
            хоолны цэс
          </Button>
        </Link>
        <Link href="delivery" className="group">
          <Button
            variant="text"
            className="text-black hover:text-red-500 relative group-hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
          >
            хүргэлтийн бүс
          </Button>
        </Link>
      </div>
      <div>
        <IconButton
          color="inherit"
          aria-label="add to shopping cart"
          onClick={toggleDrawer}
        >
          <AddShoppingCartIcon />
          <p>сагс</p>
        </IconButton>
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <DrawerContent onClose={toggleDrawer} />
        </Drawer>
      </div>
    </div>
  );
};
