"use client";
import { AddressForm, OrderSummary } from "../components/card/Delivery";
import { DeliveryMap } from "../components/card/GoogleMap";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <div className="mb-20">
        <Header />
      </div>
      <DeliveryMap />
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
