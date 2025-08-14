"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function SSAnimationWrapper() {
  return (
    <section className="w-full h-auto bg-cover bg-center">
      {/* Desktop / Medium+ */}
      <div className="hidden md:flex w-full">
        <DesktopScreenshots />
      </div>

      {/* Mobile / Small devices */}
      <div className="flex md:hidden w-full overflow-hidden">
        <MobileScreenshots />
      </div>
    </section>
  );
}

// Desktop component (your existing animated version)
const DesktopScreenshots = () => {
  // ... insert your previous SSAnimationSection code here
  // with scale animation and side screenshots bouncing
  
  const controls1 = useAnimation();
  const controls3 = useAnimation();

  // Main animation cycle duration for Screenshot 2
  const cycleDuration = 4000; // ms
  const pauseStart = 2400; // ms when scale=1.0 starts
  const pauseEnd = 3600; // ms when scale=1.0 ends

  useEffect(() => {
    const cycle = setInterval(() => {
      // Show side screenshots when Screenshot 2 reaches scale 1.0
      setTimeout(() => {
        controls1.start({
          x: [ -150, 0 ],
          opacity: [0, 1],
          transition: { type: "spring", stiffness: 300, damping: 15 },
        });
        controls3.start({
          x: [ 150, 0 ],
          opacity: [0, 1],
          transition: { type: "spring", stiffness: 300, damping: 15 },
        });
      }, pauseStart);

      // Hide them when Screenshot 2 starts scaling again
      setTimeout(() => {
        controls1.start({
          x: -150,
          opacity: 0,
          transition: { duration: 0.3 },
        });
        controls3.start({
          x: 150,
          opacity: 0,
          transition: { duration: 0.3 },
        });
      }, pauseEnd);
    }, cycleDuration);

    return () => clearInterval(cycle);
  }, [controls1, controls3]);
  return (
     <section
      className="w-full h-auto bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/ss/ss-bg.png')",
      }}
    >
      <div style={{ padding: "60px" }} className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 p-12 md:p-24">
        {/* Screenshot 1 */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={controls1}
          className="relative w-4/5 max-w-xs md:w-1/4 aspect-[370/800]"
        >
          <Image
            src="/ss/ss1.jpeg"
            alt="Screenshot 1"
            fill
            className="object-contain rounded-xl shadow-lg"
            sizes="(max-width: 768px) 80vw, 25vw"
          />
        </motion.div>

        {/* Screenshot 2 */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: [1.15, 0.95, 1.0, 1.0] }}
          transition={{
            duration: cycleDuration / 1000,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1], // matches pause timing
          }}
          className="relative w-4/5 max-w-xs md:w-1/4 aspect-[370/800]"
        >
          <Image
            src="/ss/ss2.jpeg"
            alt="Screenshot 2"
            fill
            className="object-contain rounded-xl shadow-lg"
            sizes="(max-width: 768px) 80vw, 25vw"
          />
        </motion.div>

        {/* Screenshot 3 */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={controls3}
          className="relative w-4/5 max-w-xs md:w-1/4 aspect-[370/800]"
        >
          <Image
            src="/ss/ss3.jpeg"
            alt="Screenshot 3"
            fill
            className="object-contain rounded-xl shadow-lg"
            sizes="(max-width: 768px) 80vw, 25vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Mobile component (auto-sliding carousel)
const MobileScreenshots = () => {
  return (
    <motion.div
      className="flex flex-row gap-4 w-full"
      animate={{ x: ["0%", "-100%", "-200%"] }}
      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
    >
      {[1, 2, 3, 1, 2, 3].map((n, i) => (
        <div key={i} className="relative w-64 flex-shrink-0 aspect-[370/800]">
          <Image
            src={`/ss/ss${n}.jpeg`}
            alt={`Screenshot ${n}`}
            fill
            className="object-contain rounded-xl shadow-lg"
          />
        </div>
      ))}
    </motion.div>
  );
};
