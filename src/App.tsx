import { useEffect, useState } from "react";
import Admin from "./components/Admin";
import AnnouncementBar from "./components/AnnouncementBar";
import Benefits from "./components/Benefits";
import Bundles from "./components/Bundles";
import DeliveryPolicy from "./components/DeliveryPolicy";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Hero from "./components/Hero";
import HowToUse from "./components/HowToUse";
import Ingredients from "./components/Ingredients";
import Navbar from "./components/Navbar";
import OrderForm from "./components/OrderForm";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route === "#/admin") {
    return (
      <div className="min-h-screen bg-[#faf7f1]">
        <Navbar />
        <Admin />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7f1]">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Bundles />
        <OrderForm />
        <Faq />
        <Ingredients />
        <HowToUse />
        <DeliveryPolicy />
        <FinalCta />
      </main>
      <WhatsAppFloat />
    </div>
  );
}
