"use client";
import React, { useState, useEffect, useRef } from "react";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ open, onClose }) => {
  // Modal Step: 1=Interest, 2=Form, 3=Confirmation
  const [step, setStep] = useState(1);

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              Let us know if you&apos;d use Voutch to buy or sell tickets more easily
              on campus.
            </p>
            <div className="modal-buttons">
              <button
                id="modal-yes-btn"
                className="btn btn-primary"
                onClick={() => setStep(2)}
              >
                Yes, I&apos;m Interested!
              </button>
              <button className="btn btn-secondary modal-close" onClick={onClose}>
                Not right now
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Waitlist Form */}
        {step === 2 && (
          <div id="modal-step-2" className="modal-step active">
            <h3>Great! Voutch is Launching Soon.</h3>
            <p>
              Join the official waitlist to get exclusive early access and be the
              first to know when we&apos;re live.
            </p>
            <form
              id="waitlist-form"
              className="waitlist-form"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Name (Optional)" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="school"
                  placeholder="What school do you attend? (Optional)"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Join the Waitlist
              </button>
            </form>
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
              Thanks for signing up. We&apos;ll be in touch soon with updates. Keep an
              eye on your inbox!
            </p>
            <button className="btn btn-primary modal-close" onClick={onClose}>
              Got it!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
