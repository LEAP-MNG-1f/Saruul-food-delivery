"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "./_components/header/Header";
import { Hero } from "./_components/hero/Hero";
import { Category } from "./_components/card/Category";
import { Footer } from "./_components/footer/Footer";
import AllFood, { FoodItem } from "./_components/card/FilterCategory";

export default function Home() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState<FoodItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const fetchdata = async () => {
    try {
      const response = await fetch(`https://saruul-food-delivery.onrender.com`);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <Header addToCart={addToCart} />
      <Hero />
      <Category addToCart={addToCart} />
      <Footer />
    </div>
  );
}
