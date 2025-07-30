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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <HowItWorks />
        <FinalCTA onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
