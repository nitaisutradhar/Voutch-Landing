// src/components/Hero.tsx

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section id="hero" className="hero" style={{position: 'relative', overflow: 'hidden'}}>
    {/* ==== Video Background ==== */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="hero-bg-video"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
        opacity: 0.35, // optional: adjust for darkness
        pointerEvents: 'none'
      }}
    >
      <source src="/bg-video.mp4" type="video/mp4" />
      {/* Fallback for unsupported browsers */}
      Your browser does not support the video tag.
    </video>

    {/* ==== Hero Content ==== */}
    <div className="container" style={{position: 'relative', zIndex: 1}}>
      <div className="cta-buttons">
        <button className="btn btn-primary" onClick={onOpenModal}>Buy a Ticket</button>
        <button className="btn btn-secondary" onClick={onOpenModal}>Sell a Ticket</button>
      </div>
    </div>
  </section>
);

export default Hero;
