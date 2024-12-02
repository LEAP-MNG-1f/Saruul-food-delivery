"use client";
import { AddressForm } from "../_components/card/Delivery";
import { DeliveryMap } from "../_components/card/GoogleMap";
import { OrderSummary } from "../_components/card/OrderSummary";
import { Footer } from "../_components/footer/Footer";
import { Header } from "../_components/header/Header";

export default function Home() {
  return (
    <div>
      <div className="mb-20">
        <Header />
      </div>
      <div className="flex justify-between container max-w-[1200px] m-auto">
        {/* <div className="w-[45%]">
          <AddressForm />
        </div> */}
        <div>
          <OrderSummary />
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
