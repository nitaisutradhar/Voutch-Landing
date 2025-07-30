import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);

  function closeModal() {
    setStep(1);
    onClose();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep(3);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#17162B] p-8 rounded-xl max-w-md w-full text-center relative border border-white/10 shadow-lg"
            initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
          >
            <button className="absolute top-5 right-5 text-xl text-gray-400 hover:text-white" onClick={closeModal}>
              <i className="fa-solid fa-times" />
            </button>

            {step === 1 && (
              <div>
                <h3 className="text-2xl font-bold mb-2">Awesome! Are you interested?</h3>
                <p className="mb-6 text-gray-300">Let us know if you`&apos;`d use Voutch to buy or sell tickets more easily on campus.</p>
                <div className="flex justify-center gap-4">
                  <button className="btn btn-primary" onClick={() => setStep(2)}>Yes, I`&apos;`m Interested!</button>
                  <button className="btn btn-secondary" onClick={closeModal}>Not right now</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-2">Great! Voutch is Launching Soon.</h3>
                <p className="mb-6 text-gray-300">Join the official waitlist to get exclusive early access and be the first to know when we`&apos;`re live.</p>
                <div className="flex flex-col gap-3 text-left">
                  <input className="p-3 rounded bg-[#0D0C1D] border border-gray-700 text-white" type="text" placeholder="Name (Optional)" />
                  <input className="p-3 rounded bg-[#0D0C1D] border border-gray-700 text-white" type="email" required placeholder="Email Address" />
                  <input className="p-3 rounded bg-[#0D0C1D] border border-gray-700 text-white" type="text" placeholder="What school do you attend? (Optional)" />
                  <button className="btn btn-primary mt-4" type="submit">Join the Waitlist</button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div>
                <div className="text-5xl mb-3 bg-gradient-to-r from-fuchsia-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  <i className="fa-solid fa-party-horn"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">You`&apos;`re on the list!</h3>
                <p className="mb-6 text-gray-300">Thanks for signing up. We`&apos;`ll be in touch soon with updates. Keep an eye on your inbox!</p>
                <button className="btn btn-primary" onClick={closeModal}>Got it!</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
