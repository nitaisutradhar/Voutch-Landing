import { motion } from "framer-motion";

interface HeroProps {
  onOpenModal: () => void;
}

const YOUTUBE_VIDEO_ID = "hENgrbIMiy4";
const YOUTUBE_BG_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&modestbranding=1&showinfo=0`;

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => (
  <section className="relative flex flex-col justify-center items-center text-center aspect-914/514 overflow-hidden">
    {/* --- Background Video --- */}
    <div className="absolute inset-0 w-[100vw] h-full z-10 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <iframe
          src={YOUTUBE_BG_URL}
          title="ARTBAT play Return to Oz at Cercle Festival"
          frameBorder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          // Make the iframe FULL and use absolute to cover parent
          className="absolute top-0 left-0 w-[100vw] h-full"
        />
        {/* Optional: darken for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
    </div>
    {/* --- Content --- */}
    <div className="z-10 p-3">
      <motion.h1
        className="text-lg sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The <span className="bg-gradient-to-r from-fuchsia-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">Easy Way</span> to Buy & Sell Event Tickets
      </motion.h1>
      <motion.p
        className="hidden sm:block text-[10px] md:text-lg text-gray-100 mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Stop scrolling through messy group chats and endless DMs. Voutch is the simple, secure marketplace for students at your school to find and sell tickets for the best campus events.
      </motion.p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button onClick={onOpenModal} className="btn btn-primary">Buy a Ticket</button>
        <button onClick={onOpenModal} className="btn btn-secondary">Sell a Ticket</button>
      </div>
    </div>
  </section>
);

export default Hero;
