import { useState, useEffect } from "react";

// Navbar: transparent over the hero, solid cream once scrolled.
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">Trattoria <em>Bella</em></div>
        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#story">Story</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#reserve">Reserve</a></li>
        </ul>
        <a href="#reserve" className="btn btn-outline">Book a Table</a>
      </div>
    </nav>
  );
}

export default Navbar;
