// ""
// import React, { useState } from "react";
// import LocalDiningIcon from "@mui/icons-material/LocalDining";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { AnchorTemporaryDrawer } from "../card/Drawer";
// import { Drawer } from "@mui/material";

// export const Header = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };
//   return (
//     <div className="flex flex-row gap-2 mt-[100px] container m-auto justify-between max-w-[1200px]">
//       <div className="flex gap-6">
//         <LocalDiningIcon style={{ width: "40px", height: "40px" }} />
//         <Button variant="text" style={{ color: "black" }}>
//           нүүр
//         </Button>
//         <Button variant="text" style={{ color: "black" }}>
//           хоолны цэс
//         </Button>
//         <Button variant="text" style={{ color: "black" }}>
//           хүргэлтийн бүс
//         </Button>
//       </div>
//       <div>
//         <IconButton color="inherit" aria-label="add to shopping cart" onClick={toggleDrawer}>
//           <AddShoppingCartIcon />
//           <p>сагс</p>
//         </IconButton>
//         <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={toggleDrawer}
//       >
//         <AnchorTemporaryDrawer />
//       </Drawer>
//       </div>
//     </div>
//   );
// };
"use client";
import React, { useState } from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Drawer } from "@mui/material";
import { DrawerContent } from "../card/Drawer";
import Link from "next/link";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-row gap-2 mt-[100px] container m-auto justify-between max-w-[1200px]">
      <div className="flex gap-6">
        <LocalDiningIcon style={{ width: "40px", height: "40px" }} />
        <Link href="/">
          <Button variant="text" style={{ color: "black" }}>
            нүүр
          </Button>
        </Link>
        <Link href="categories">
          <Button variant="text" style={{ color: "black" }}>
            хоолны цэс
          </Button>
        </Link>
        <Link href="delivery">
          <Button variant="text" style={{ color: "black" }}>
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
