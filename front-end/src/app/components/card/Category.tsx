import React, { useState } from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Card } from "./Card";
import BadgeVisibility from "./AddCountInModul";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import { colors } from "@mui/material";

interface Recipe {
  id: number;
  title: string;
  amount: number;
  img: string;
  category: string;
  ingredients: string;
}

interface RecipeDialogProps {
  open: boolean;
  selectedRecipe: Recipe | null;
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
            <div>
              <img
                src={selectedRecipe.img}
                alt={selectedRecipe.title}
                className="w-80 h-[290px] object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="font-bold text-2xl">{selectedRecipe.title}</h3>
              <div className="text-lg text-green-600 font-bold">
                ₮{selectedRecipe.amount.toLocaleString()}
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <p className="font-bold text-[20px]">орц</p>
                <span>{selectedRecipe.ingredients}</span>
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
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const recipes: Recipe[] = [
    {
      id: 1,
      title: "American Recipes",
      amount: 9000,
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505",
      category: "Амттан",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 2,
      title: "Korean Food",
      amount: 12000,
      img: "https://www.thespruceeats.com/thmb/eFzxoZFO-ZWurv42gxrBveHYOf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg",
      category: "Амттан",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 3,
      title: "Japanese Cuisine",
      amount: 15000,
      img: "https://turpoisk.ua/images/blog/japonskaja-kuhnia/japon-kuhnia-1.jpg",
      category: "Амттан",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 4,
      title: "Italian Dishes",
      amount: 8500,
      img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png",
      category: "Амттан",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 5,
      title: "Mexican Tacos",
      amount: 9500,
      img: "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
      category: "Салад ба зууш",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 6,
      title: "French Cuisine",
      amount: 11000,
      img: "https://cooknshare.com/wp-content/uploads/2022/07/ratatouilleweb.jpg",
      category: "Салад ба зууш",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 7,
      title: "Chinese Dishes",
      amount: 13000,
      img: "https://media.cnn.com/api/v1/images/stellar/prod/220921081550-05-chinese-foods-mapo-tofu.jpg?c=original",
      category: "Салад ба зууш",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 8,
      title: "Indian Cuisine",
      amount: 14000,
      img: "https://cdn.britannica.com/94/240094-050-D5CC461B/Indian-naan-flatbread.jpg",
      category: "Салад ба зууш",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 9,
      title: "Mediterranean Meals",
      amount: 10500,
      img: "https://minimalistbaker.com/wp-content/uploads/2016/07/The-Ultimate-Mediterranean-Bowl-SQUARE.jpg",
      category: "Хямдралтай",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 10,
      title: "Thai Food",
      amount: 11500,
      img: "https://www.indulgebangkok.com/wp-content/uploads/2018/11/356fdc00e7ec5e447c1d322a91f8968a-1080x675.jpg",
      category: "Хямдралтай",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 11,
      title: "Vietnamese Pho",
      amount: 12500,
      img: "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg",
      category: "Хямдралтай",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 12,
      title: "Greek Dishes",
      amount: 13500,
      img: "https://www.greekality.com/wp-content/uploads/2022/01/moussaka.png",
      category: "Хямдралтай",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 13,
      title: "Spanish Cuisine",
      amount: 12500,
      img: "https://www.discoverspain.today/wp-content/uploads/2024/01/Spanish-paella-spanish-foods.jpg",
      category: "Үндсэн хоол",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 14,
      title: "Turkish Food",
      amount: 9500,
      img: "https://www.cazbar.com/wp-content/uploads/2024/07/mahsa-shamshiri-fard-xlHOUotnpTc-unsplash-scaled.jpg",
      category: "Үндсэн хоол",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 15,
      title: "Middle Eastern Meals",
      amount: 10000,
      img: "https://ik.imagekit.io/munchery/blog/tr:w-768/old-meets-new-the-roots-and-current-trends-of-middle-eastern-cooking.jpeg",
      category: "Үндсэн хоол",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      id: 16,
      title: "Caribbean Cuisine",
      amount: 11000,
      img: "https://foodinstitute.com/wp-content/uploads/2022/01/caribbean-food-trend.jpg",
      category: "Үндсэн хоол",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
  ];

  const categories: string[] = [
    "Хямдралтай",
    "Үндсэн хоол",
    "Салад ба зууш",
    "Амттан",
  ];

  const handleCardClick = (recipe: Recipe): void => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container mx-auto mt-24 max-w-[1200px] px-4">
      {categories.map((categoryTitle, index) => {
        const categoryRecipes = recipes.filter(
          (recipe) => recipe.category === categoryTitle
        );
        return (
          <div key={index} className="mb-12">
            <div className="flex items-center gap-5 mb-6">
              <AssistantIcon className="w-10 h-10 text-green-500" />
              <h2 className="font-bold text-xl">{categoryTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => handleCardClick(recipe)}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <Card
                    img={recipe.img}
                    title={recipe.title}
                    amount={recipe.amount}
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

export default Category;
