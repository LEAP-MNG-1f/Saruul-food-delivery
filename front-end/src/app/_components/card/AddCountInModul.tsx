import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CartItem } from "./Cart";

type updateQuantityType = {
  updateQuantity: (item: CartItem, newQuantity: number) => void;
  item: CartItem;
};

export default function BadgeVisibility({
  updateQuantity,
  item,
}: updateQuantityType) {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <div>
        <ButtonGroup>
          <div className="flex justify-between gap-17">
            <Button
              aria-label="reduce"
              onClick={() => updateQuantity(item, item.quantity - 1)}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Badge
              style={{
                color: "black",
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                marginLeft: "30px",
              }}
            >
              {item.quantity}
            </Badge>
            <Button
              aria-label="increase"
              onClick={() => updateQuantity(item, item.quantity + 1)}
            >
              <AddIcon fontSize="small" />
            </Button>
          </div>
        </ButtonGroup>
      </div>
    </Box>
  );
}
