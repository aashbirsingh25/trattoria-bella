import Reveal from "./Reveal";

// Gallery: a mosaic of food & interior shots. "wide" items span 2 columns.
const images = [
  { url: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80", wide: true },
  { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80", wide: true },
];

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>Gallery</span>
          <h2 className="section-title">A Feast for the <em>Eyes</em></h2>
          <p className="section-subtitle">A glimpse of our kitchen, our dishes, and our table.</p>
        </Reveal>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                className={`gallery-item ${img.wide ? "wide" : ""}`}
                style={{ backgroundImage: `url(${img.url})` }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
