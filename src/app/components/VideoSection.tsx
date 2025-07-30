const VideoSection = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="w-full max-h-[750px] overflow-hidden relative">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto object-cover block"
    >
      <source src="/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="cta-buttons flex gap-5">
        <button className="btn btn-primary" onClick={onOpenModal}>Buy a Ticket</button>
        <button className="btn btn-secondary" onClick={onOpenModal}>Sell a Ticket</button>
      </div>
    </div>
  </section>
);

export default VideoSection;
