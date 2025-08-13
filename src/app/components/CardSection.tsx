import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cardData } from "../data/cardData";
export interface Card {
  id: number;
  imgSrc: string;
  eventName: string;
  date: string;
  location: string;
  button: {
    text: string;
  };
  description?: string;
}

const CardSection = () => {
  const [alertCard, setAlertCard] = useState<Card | null>(null);

  const handleViewEvent = (card: Card) => {
    setAlertCard(card);
  };

  // Auto-hide after 3s
  useEffect(() => {
    if (alertCard) {
      const timer = setTimeout(() => {
        setAlertCard(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alertCard]);

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-[var(--color-surface)] gap-2 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2.5 transition-transform duration-300 border border-white/10 flex flex-col"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={card.imgSrc}
                  alt={card.eventName}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content Section */}
              <div
                style={{ padding: "10px" }}
                className="flex flex-col flex-grow text-left gap-1.5"
              >
                <h3
                  className="text-lg font-bold text-[var(--color-primary-text)] my-2 truncate"
                  title={card.eventName}
                >
                  {card.eventName}
                </h3>
                <div className="text-sm text-[var(--color-secondary-text)] mb-1 flex items-center gap-2">
                  <i className="fa-solid fa-calendar-days w-4 text-center"></i>
                  <span>{card.date}</span>
                </div>
                <div className="text-sm text-[var(--color-secondary-text)] mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-location-dot w-4 text-center"></i>
                  <span>{card.location}</span>
                </div>
                <div className="mt-auto pt-2">
                  <button
                    style={{ padding: "5px 10px" }}
                    className="btn text-black bg-white rounded-full border-2 border-gray-400 text-sm hover:-translate-y-0.5 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleViewEvent(card)}
                  >
                    {card.button.text}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Notification */}
      {alertCard && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div style={{ padding: "10px" }} className="bg-white text-gray-800 px-10 py-16 rounded-lg shadow-lg border border-gray-200">
            <h3 className="font-bold text-lg">{alertCard.eventName}</h3>
            <p className="text-sm text-gray-600">
              📅 {alertCard.date} | 📍 {alertCard.location}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardSection;
