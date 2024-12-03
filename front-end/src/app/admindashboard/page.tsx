import React from "react";
import { Footer } from "../_components/footer/Footer";
import { Header } from "../_components/header/Header";
import { AdminDashboard } from "../admin/Admin-dashboard";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <div className="container flex">
        <AdminDashboard />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
