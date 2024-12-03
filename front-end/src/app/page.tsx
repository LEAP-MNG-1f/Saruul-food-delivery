"use client";

import { useEffect, useState } from "react";
import { Header } from "./_components/header/Header";
import { Hero } from "./_components/hero/Hero";
import { Category } from "./_components/card/Category";
import { Footer } from "./_components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Footer />
    </div>
  );
}
