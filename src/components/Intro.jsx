import Reveal from "./Reveal";

// Intro: the family story — image + text split.
function Intro() {
  return (
    <section id="story" className="intro">
      <div className="container">
        <div className="intro-grid">
          <Reveal>
            <div className="intro-img" />
          </Reveal>
          <div className="intro-text">
            <Reveal delay={0.1}>
              <span className="eyebrow">Our Story</span>
              <h2>A family table, <em>open to all</em></h2>
              <p>
                Trattoria Bella began in 1987 as a small kitchen run by
                Nonna Lucia, who believed that good food brings people
                together. Nearly four decades later, we still cook the way
                she taught us — slowly, with love, and the freshest
                ingredients.
              </p>
              <p>
                Every plate of pasta is rolled by hand each morning, and our
                sauces simmer for hours, just as they did in her kitchen.
              </p>
              <div className="intro-sign">— The Bella Family</div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
