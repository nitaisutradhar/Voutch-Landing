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
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   phone: ""
  // });


//     const [visits, setVisits] = useState<number | null>(null);
// useEffect(() => {
//   const increment = async () => {
//     const res = await fetch("/api/visitors", { method: "POST" });
//     const data = await res.json();
//     setVisits(data.count);
//   };
//   increment();
// }, []);


  return (
    <>
      <VideoSection onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero />
        {/* <CardSection userData={userData} setUserData={setUserData} /> */}
        <CardSection onOpenModal={() => setModalOpen(true)} />
        {/* <SSAnimationSection /> */}
        <FinalCTA onOpenModal={() => setModalOpen(true)} />
        <SSAnimationSection />
        <HowItWorks />
      </main>
      <Footer />
      {/* <WaitlistModal setUserData={setUserData} open={modalOpen} onClose={() => setModalOpen(false)} /> */}
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
