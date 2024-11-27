"use client";

import AllFood from "../components/card/FilterCategory";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <AllFood />
      <Footer />
    </div>
  );
}
