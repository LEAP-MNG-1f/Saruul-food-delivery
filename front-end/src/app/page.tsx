"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Category } from "./components/card/Category";
import { Footer } from "./components/footer/Footer";

export default function Home() {
  const [data, setData] = useState([]);

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
      <Header />
      <Hero />
      <Category />
      <Footer />
    </div>
  );
}
