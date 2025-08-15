"use client";
import React, { useState, useEffect, useRef } from "react";
import WaitlistForm from "./WaitlistForm";
import emailjs from "@emailjs/browser";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
  setUserData: (data: { name: string; email: string; phone: string }) => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({
  open,
  onClose,
  setUserData,
}) => {
  // Modal Step: 1=Interest, 2=Form, 3=Confirmation
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<null | string>(null);

  // Ref for modal, to handle click outside
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset steps when modal reopens
  useEffect(() => {
    if (open) setStep(1);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // Click outside modal content to close
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) onClose();
  };

  // Form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Public Key
      );

      if (res.status === 200) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setUserData(form); // save to parent
    setStep(3);
  };

  if (!open) return null;

  return (
    <div
      id="waitlist-modal"
      className={`modal active`}
      ref={modalRef}
      onClick={handleBackgroundClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-content">
        {/* Close Button (top right) */}
        <i className="fa-solid fa-times modal-close" onClick={onClose}></i>

        {/* Step 1: Interest */}
        {step === 1 && (
          <div id="modal-step-1" className="modal-step active">
            <h3>Awesome! Are you interested?</h3>
            <p>
              Let us know if you&apos;d use Voutch to buy or sell tickets more
              easily on campus.
            </p>
            <div className="modal-buttons">
              <button
                id="modal-yes-btn"
                className="btn btn-primary"
                onClick={() => setStep(2)}
              >
                Yes, I&apos;m Interested!
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Waitlist Form */}
        {step === 2 && (
          <div id="modal-step-2">
            <WaitlistForm
              form={form}
              setForm={setForm}
              handleSubmit={handleSubmit}
              status={status}
            />
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div id="modal-step-3" className="modal-step active">
            <div className="confirmation-icon">
              <i className="fa-solid fa-party-horn"></i>
            </div>
            <h3>You&apos;re on the list!</h3>
            <p>
              Thanks for signing up. We&apos;ll be in touch soon with updates.
              Keep an eye on your inbox!
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Got it!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
