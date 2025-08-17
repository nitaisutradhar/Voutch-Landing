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

  return (
    <>
      <VideoSection onOpenModal={() => setModalOpen(true)} />
      <main>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-xl font-bold mt-5">Welcome to my site 🚀</h1>
          {visits !== null && <p>Visitor Count: {visits}</p>}
        </div>
        <Hero />
        <CardSection userData={userData} setUserData={setUserData} />
        <HowItWorks />
        <SSAnimationSection />
        <FinalCTA onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <WaitlistModal setUserData={setUserData} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
