"use client";

import React from "react";
import MainAdminPage from "./Admin";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="container flex">
        <MainAdminPage />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
