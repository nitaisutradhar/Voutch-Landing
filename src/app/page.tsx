// In App Router, we cannot use useState at top-level in a Server Component.
// Make this a Client Component!
"use client";

import { useState } from "react";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Hero from "./components/Hero";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WaitlistModal from "./components/WaitlistModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen font-[Poppins] bg-[#0D0C1D] text-white relative">
      <Header />
      <main>
        <Hero onOpenModal={() => setShowModal(true)} />
        <HowItWorks />
        <FinalCTA onOpenModal={() => setShowModal(true)} />
      </main>
      <Footer />
      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
