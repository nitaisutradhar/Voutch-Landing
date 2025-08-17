// In App Router, we cannot use useState at top-level in a Server Component.
// Make this a Client Component!
"use client";

import { useEffect, useState } from "react";
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
    const [visits, setVisits] = useState<number | null>(null);

    // Shared data
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  });


useEffect(() => {
  const increment = async () => {
    const res = await fetch("/api/visitors", { method: "POST" });
    const data = await res.json();
    setVisits(data.count);
  };
  increment();
}, []);

console.log("Visits:", visits);

  return (
    <>
      <VideoSection onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero />
        <CardSection userData={userData} setUserData={setUserData} />
        <FinalCTA onOpenModal={() => setModalOpen(true)} />
        <SSAnimationSection />
        <HowItWorks />
      </main>
      <Footer />
      <WaitlistModal setUserData={setUserData} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
