import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cardData } from "../data/cardData";
import WaitlistForm from "./WaitlistForm";
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
  setUserData: (data: { name: string; email: string; phone: string }) => void;
}

const CardSection = ({ userData, setUserData }: CardSectionProps) => {
  const [alertCard, setAlertCard] = useState<Card | null>(null);
  
   const [form, setForm] = useState({
  name: userData.name || "",
  email: userData.email || "",
  phone: userData.phone || ""
});

useEffect(() => {
  setForm({
    name: userData.name || "",
    email: userData.email || "",
    phone: userData.phone || ""
  });
}, [userData]);

  const handleViewEvent = (card: Card) => {
    setAlertCard(card);
  };
  const handleCloseAlert = () => {
    setAlertCard(null);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData(form);
    handleCloseAlert();
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
                  className="text-[20px] font-bold truncate"
                  title={card.eventName}
                >
                  {card.eventName}
                </h3>
                <div
                  style={{ marginBottom: "5px" }}
                  className="text-sm text-[var(--color-secondary-text)] flex items-center gap-2"
                >
                  <i className="fa-solid fa-calendar-days w-4 text-center"></i>
                  <span>{card.date}</span>
                </div>
                <div
                  style={{ marginBottom: "5px" }}
                  className="text-sm text-[var(--color-secondary-text)] flex items-center gap-2"
                >
                  <i className="fa-solid fa-location-dot w-4 text-center"></i>
                  <span>{card.location}</span>
                </div>
                <div className="mt-auto pt-2">
                  <button
                    style={{ padding: "5px 10px", border: "1px solid gray" }}
                    className="btn text-black bg-white rounded-full text-[13px] hover:-translate-y-0.5 transition-transform duration-300 cursor-pointer"
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
        // <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="modal active">
          <div className="modal-content">
            <i className="fa-solid fa-times modal-close" onClick={handleCloseAlert}></i>
            <WaitlistForm
              form={form}
              setForm={setForm}
              handleSubmit={ handleSubmit}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CardSection;
