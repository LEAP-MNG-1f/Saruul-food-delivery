"use client";
import { AddressForm } from "../_components/card/Delivery";
import { DeliveryMap } from "../_components/card/GoogleMap";
import { OrderSummary } from "../_components/card/OrderSummary";
import { Footer } from "../_components/footer/Footer";
import { Header } from "../_components/header/Header";

export default function Home() {
  return (
    <div>
      <div className="mb-5">
        <Header />
      </div>
      <div className="container max-w-[1250px] m-auto">
        <DeliveryMap />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
