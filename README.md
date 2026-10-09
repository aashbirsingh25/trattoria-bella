# Trattoria Bella — Italian Restaurant Website

**🔗 Live demo: [trattoria-bella-pi.vercel.app](https://trattoria-bella-pi.vercel.app/)**

A warm, cinematic website for a fictional Italian restaurant, featuring a
scroll-scrubbed video showpiece and a filterable menu. Built with React, Vite,
Framer Motion, Lenis, and GSAP.

![Status](https://img.shields.io/badge/status-live-c0602f)

## Features

- **Scroll-scrubbed video** — a pizza video whose playback is driven by scroll
  position (Apple-style), with cross-fading captions over it
- **Filterable menu** — filter dishes by course (Starters, Pasta, Mains, Pizza,
  Dolci) with animated transitions
- **Hero parallax** — background drifts and text lifts as you scroll
- **Smooth momentum scrolling** (Lenis)
- **Scroll-reveal animations** throughout (Framer Motion)
- **Image gallery** mosaic
- **Reservation form** with confirmation
- Fully responsive

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [GSAP + ScrollTrigger](https://gsap.com/) — scroll-scrubbed video & pinning
- [Framer Motion](https://www.framer.com/motion/) — reveal animations
- [Lenis](https://lenis.darkroom.engineering/) — smooth scroll
- Plain CSS (custom design system)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # build for production
npm run preview  # preview the production build
```

## The Scroll-Scrubbed Video

The showpiece ties the video's `currentTime` to scroll progress. For smooth
seeking, the source video is re-encoded so every frame is a keyframe:

```bash
ffmpeg -i source.mp4 -an -vf "scale=1280:-2,format=yuv420p" \
  -c:v libx264 -g 1 -keyint_min 1 -sc_threshold 0 -preset slow -crf 23 \
  -movflags +faststart public/pizza_scrub.mp4
```

`public/pizza_scrub.mp4` (the processed, all-keyframe clip) is the only video the
site loads. Raw source clips are gitignored.

## Project Structure

```
src/
  App.jsx
  index.css
  main.jsx                 # Lenis + GSAP ScrollTrigger setup
  components/
    Navbar.jsx
    Hero.jsx               # parallax hero
    Intro.jsx              # family story
    ScrollVideo.jsx        # scroll-scrubbed video showpiece
    Menu.jsx               # filterable menu
    Gallery.jsx
    Reserve.jsx            # reservation form
    Footer.jsx
    Reveal.jsx             # reusable scroll-reveal wrapper
```

---

Built by Aashbir Singh.
