import { useRef, useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

// ScrollVideo: video scrubbed by scroll (Apple-style).
//  - Video: on each scroll update, set currentTime = progress * duration
//    directly (every frame is a keyframe, so seeks land exactly).
//  - Captions: we pick the ACTIVE caption from the progress "zone" and let
//    CSS fade it on its own time-based transition. This avoids the twitchy
//    look you get when opacity is tied directly to scroll position.
function ScrollVideo() {
  const section = useRef(null);
  const videoRef = useRef(null);
  const [active, setActive] = useState(0); // which caption (0,1,2) is showing

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let st;
    let duration = 5;

    const setup = () => {
      duration = video.duration || 5;

      st = ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: "+=2600",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const p = self.progress;

          // Seek the video frame.
          if (video.readyState >= 2) {
            video.currentTime = Math.min(p * duration, duration - 0.001);
          }

          // Pick caption by zone (with gaps so only one shows at a time).
          let next = 0;
          if (p >= 0.66) next = 2;
          else if (p >= 0.33) next = 1;
          else next = 0;
          setActive((prev) => (prev === next ? prev : next));
        },
      });

      ScrollTrigger.refresh();
    };

    if (video.readyState >= 2) setup();
    else {
      video.addEventListener("loadeddata", setup, { once: true });
      video.load();
    }

    return () => {
      if (st) st.kill();
      video.removeEventListener("loadeddata", setup);
    };
  }, []);

  const caps = [
    { eyebrow: "Wood-Fired", title: <>Fresh from the <em>oven</em></> },
    { eyebrow: "Hand-Stretched", title: <>Melted to <em>perfection</em></> },
    { eyebrow: "Served Hot", title: <>Taste the <em>difference</em></> },
  ];

  return (
    <section className="scrollvideo" ref={section}>
      <video
        ref={videoRef}
        className="sv-video"
        src="/pizza_scrub.mp4"
        muted
        playsInline
        preload="auto"
      />
      <div className="sv-overlay" />
      <div className="sv-caps">
        {caps.map((c, i) => (
          <div key={i} className={`sv-cap ${active === i ? "is-active" : ""}`}>
            <span className="eyebrow">{c.eyebrow}</span>
            <h2>{c.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScrollVideo;
