"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SSAnimationSection = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/ss/ss-bg.png')",
      }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-center gap-10 px-4">
        {/* Screenshot 1 */}
        <div className="relative w-4/5 max-w-xs md:w-1/4 aspect-[370/800]">
          <Image
            src="/ss/ss1.jpeg"
            alt="Screenshot 1"
            fill
            className="object-contain rounded-xl shadow-lg"
            sizes="(max-width: 768px) 80vw, 25vw"
          />
        </div>

        {/* Screenshot 2 */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: [1.2, 0.95, 1.0, 1.0] }} // 1.0 twice to pause
          transition={{
            duration: 3.5, // slightly longer to account for pause
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1], // control timing (pause between 0.7 → 1)
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
        <div className="relative w-4/5 max-w-xs md:w-1/4 aspect-[370/800]">
          <Image
            src="/ss/ss3.jpeg"
            alt="Screenshot 3"
            fill
            className="object-contain rounded-xl shadow-lg"
            sizes="(max-width: 768px) 80vw, 25vw"
          />
        </div>
      </div>
    </section>
  );
};

export default SSAnimationSection;
