"use client";
import Image from "next/image";

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
        <div className="relative w-4/5 max-w-xs md:w-1/4 aspect-[370/800]">
          <Image
            src="/ss/ss2.jpeg"
            alt="Screenshot 2"
            fill
            className="object-contain rounded-xl shadow-lg"
            sizes="(max-width: 768px) 80vw, 25vw"
          />
        </div>

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
