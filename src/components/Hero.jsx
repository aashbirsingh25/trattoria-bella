import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero: full-screen food image + name + CTAs, with a scroll parallax on the bg.
function Hero() {
  const hero = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background drifts down slower than scroll = parallax depth.
      gsap.to(".hero-bg", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: hero.current, start: "top top", end: "bottom top", scrub: true },
      });
      // Hero text fades + lifts as you scroll past.
      gsap.to(".hero-content", {
        y: -80, opacity: 0, ease: "none",
        scrollTrigger: { trigger: hero.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, hero);
    return () => ctx.revert();
  }, []);

  return (
    <header className="hero" ref={hero}>
      <motion.div
        className="hero-bg"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.span className="eyebrow"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          Authentic Italian · Since 1987
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.22,1,0.36,1] }}>
          A Taste of <em>Italy</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.9 }}>
          Handmade pasta, wood-fired classics, and family recipes passed
          down through generations. Benvenuti.
        </motion.p>
        <motion.div className="hero-cta"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.1 }}>
          <a href="#reserve" className="btn">Book a Table</a>
          <a href="#menu" className="btn btn-light">View Menu</a>
        </motion.div>
      </div>
      <div className="scroll-cue">Scroll</div>
    </header>
  );
}

export default Hero;
