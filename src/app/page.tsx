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
import VideoSection from "./components/VideoSection";
import CardSection from "./components/CardSection";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

    // Shared data
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  console.log("User Data:", userData);

  return (
    <>
      <Header />
      <VideoSection onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero />
        <CardSection userData={userData} />
        <HowItWorks />
        <FinalCTA onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <WaitlistModal setUserData={setUserData} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
