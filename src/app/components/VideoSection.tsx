const VideoSection = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="w-full max-h-[700px] md:max-h-[750px] overflow-hidden relative">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto object-cover block"
    >
      <source src="/Marco Carola and Black Coffee at Music On _ Destino Pacha Ibiza 2024.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Brand Name */}
      <div className="absolute top-3 sm:top-10">
        <a href="#" className="logo">VOUTCH</a>
      </div>
      {/* Buttons */}
      <div style={{ margin: "30px" }} className="absolute bottom-0 md:bottom-1/5 cta-buttons flex flex-col sm:flex-row gap-2 sm:gap-5">
        <button className="btn btn-primary" onClick={onOpenModal}>Buy a Ticket</button>
        <button className="btn btn-secondary" onClick={onOpenModal}>Sell a Ticket</button>
      </div>
    </div>
  </section>
);

export default VideoSection;
