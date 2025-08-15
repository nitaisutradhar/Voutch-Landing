const FinalCTA = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section style={{ padding: "6rem 0" }} className="final-cta">
    <div className="container">
      <h2>Ready to Ditch the <span className="gradient-text">Group Chat?</span></h2>
      <p>Be the first to know when Voutch launches at your school. Join the waitlist for exclusive early access.</p>
      <div className="cta-buttons">
        <button className="btn btn-primary" onClick={onOpenModal}>Join the Waitlist</button>
      </div>
    </div>
  </section>
);
export default FinalCTA;
