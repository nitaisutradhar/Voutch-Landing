const VideoSection = () => (
  <section className="video-section" style={{
    width: "100%",
    overflow: "hidden",
    position: "relative",
  }}>
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        objectFit: "cover",
      }}
    >
      <source src="/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
);

export default VideoSection;
