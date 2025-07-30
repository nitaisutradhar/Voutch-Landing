interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => (
  <section className="bg-[#17162B] rounded-2xl my-16 py-16 text-center mx-3">
    <div className="container mx-auto px-3">
      <h2 className="text-lg sm:text-3xl md:text-4xl font-bold mb-4">
        Ready to Ditch the <span className="bg-gradient-to-r from-fuchsia-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">Group Chat?</span>
      </h2>
      <p className="mb-8 max-w-md mx-auto text-[10px] sm:text-lg text-gray-300">
        Be the first to know when Voutch launches at your school. Join the waitlist for exclusive early access.
      </p>
      <button onClick={onOpenModal} className="btn btn-primary">Join the Waitlist</button>
    </div>
  </section>
);

export default FinalCTA;
