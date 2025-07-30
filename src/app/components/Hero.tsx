const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section id="hero" className="hero">
    <div className="container">
      <h1 className="place-self-center">The <span className="gradient-text">Easy Way</span> to Buy & Sell Event Tickets</h1>
      <p className="description">
        Stop scrolling through messy group chats and endless DMs. Voutch is the simple, secure marketplace for students at your school to find and sell tickets for the best campus events.
      </p>
      <div className="cta-buttons">
        <button className="btn btn-primary" onClick={onOpenModal}>Buy a Ticket</button>
        <button className="btn btn-secondary" onClick={onOpenModal}>Sell a Ticket</button>
      </div>
    </div>
  </section>
);
export default Hero;
