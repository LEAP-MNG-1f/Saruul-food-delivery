"use client";
import Category from "../components/card/Category";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Category />
      <Footer />
    </div>
  );
}
