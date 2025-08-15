// In App Router, we cannot use useState at top-level in a Server Component.
// Make this a Client Component!
"use client";

import { useState } from "react";
import HowItWorks from "./components/HowItWorks";
import Hero from "./components/Hero";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WaitlistModal from "./components/Waitlist/WaitlistModal";
import VideoSection from "./components/VideoSection";
import CardSection from "./components/CardSection";
import SSAnimationSection from "./components/SSAnimationSection";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

    // Shared data
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  return (
    <>
      <VideoSection onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero />
        <CardSection userData={userData} setUserData={setUserData} />
        <HowItWorks />
        <FinalCTA onOpenModal={() => setModalOpen(true)} />
        <SSAnimationSection />
      </main>
      <Footer />
      <WaitlistModal setUserData={setUserData} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
