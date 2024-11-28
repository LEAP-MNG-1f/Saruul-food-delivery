"use client";

import AllFood from "../_components/card/FilterCategory";
import { Footer } from "../_components/footer/Footer";
import { Header } from "../_components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <AllFood />
      <Footer />
    </div>
  );
}
