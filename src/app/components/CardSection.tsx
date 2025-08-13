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
interface CardSectionProps {
  userData: {
    name: string;
    email: string;
    phone: string;
  };
}

const CardSection = ({ userData }: CardSectionProps) => {
  const [alertCard, setAlertCard] = useState<Card | null>(null);

  const handleViewEvent = (card: Card) => {
    setAlertCard(card);
  };
  const handleCloseAlert = () => {
    setAlertCard(null);
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto">
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {cardData.map((card) => (
            <div
              key={card.id}
              style={{ margin: "5px" }}
              className="gap-2 rounded-sm shadow-lg overflow-hidden transform hover:-translate-y-2.5 transition-transform duration-300 border border-white/10 flex flex-col"
            >
              <div className="relative w-full">
                <Image
                  src={card.imgSrc}
                  alt={card.eventName}
                  width={320}
                  height={420}
                  className="aspect-320/420 w-full h-full object-cover"
                  sizes="(max-width: 420px) 100vw, (max-width: 320px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content Section */}
              <div
                style={{ padding: "10px" }}
                className="flex flex-col flex-grow text-left gap-1"
              >
                <h3
                  className="text-[20px] font-bold text-[var(--color-primary-text)] truncate"
                  title={card.eventName}
                >
                  {card.eventName}
                </h3>
                <div
                  style={{ marginBottom: "5px" }}
                  className="text-sm text-white flex items-center gap-2"
                >
                  <i className="fa-solid fa-calendar-days w-4 text-center"></i>
                  <span>{card.date}</span>
                </div>
                <div
                  style={{ marginBottom: "5px" }}
                  className="text-sm text-white flex items-center gap-2"
                >
                  <i className="fa-solid fa-location-dot w-4 text-center"></i>
                  <span>{card.location}</span>
                </div>
                <div className="mt-auto pt-2">
                  <button
                    style={{ padding: "5px 10px" }}
                    className="btn text-black bg-white rounded-full border-2 border-gray-400 text-[13px] hover:-translate-y-0.5 transition-transform duration-300 cursor-pointer"
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
          <div className="modal-content">
        <i className="fa-solid fa-times modal-close" onClick={handleCloseAlert}></i>
            <div id="modal-step-3" className="modal-step active">
              <h3>You&apos;re on the list!</h3>
              <div>
                <p className="text-sm text-gray-500">
                Event Name: {alertCard.eventName}
              </p>
              <p className="text-sm text-gray-500">
                Date: {alertCard.date}
              </p>
              <p className="text-sm text-gray-500">
                Location: {alertCard.location}
              </p>
              </div>
              {/* User Data */}
              <div>
                <p className="text-sm text-gray-500">
                  Name: {userData.name || "N/A"}
                </p>
                <p className="text-sm text-gray-500">
                  Email: {userData.email || "N/A"}
                </p>
                <p className="text-sm text-gray-500">
                  Phone: {userData.phone || "N/A"}
                </p>
              </div>
              
              <p>
                Thanks for your interest! We&apos;ll be in touch soon with updates. Keep an
                eye on your inbox!
              </p>
              <button className="btn btn-primary" onClick={handleCloseAlert}>
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardSection;
