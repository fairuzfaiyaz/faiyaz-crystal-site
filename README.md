# ✨ Crystal Site

A cinematic React + Vite landing page for **Lumen Glassworks**, built with WebGL-powered visuals using `ogl`.

<p align="center">
  <svg width="100%" height="160" viewBox="0 0 1000 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated crystal waves">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b1020"/>
        <stop offset="100%" stop-color="#141a33"/>
      </linearGradient>
      <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#8ec5ff"/>
        <stop offset="50%" stop-color="#f8d5ff"/>
        <stop offset="100%" stop-color="#84fab0"/>
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <rect width="1000" height="160" fill="url(#bg)" rx="18" />

    <path d="M0,105 C150,55 250,145 400,95 C550,45 700,140 1000,85" fill="none" stroke="url(#wave)" stroke-width="3" filter="url(#glow)">
      <animate attributeName="d" dur="7s" repeatCount="indefinite"
        values="M0,105 C150,55 250,145 400,95 C550,45 700,140 1000,85;
                M0,95 C140,145 270,45 420,100 C560,150 730,55 1000,100;
                M0,105 C150,55 250,145 400,95 C550,45 700,140 1000,85" />
    </path>

    <circle cx="140" cy="80" r="6" fill="#ffffff" opacity="0.75">
      <animate attributeName="r" values="3;9;3" dur="2.2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.2s" repeatCount="indefinite" />
    </circle>
    <circle cx="820" cy="90" r="5" fill="#ffffff" opacity="0.65">
      <animate attributeName="r" values="2;7;2" dur="2.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.25;0.85;0.25" dur="2.6s" repeatCount="indefinite" />
    </circle>

    <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-size="30" font-family="Inter, Segoe UI, Arial, sans-serif" fill="#f5f8ff" letter-spacing="1">
      GLASS THAT HOLDS A STORM
      <animate attributeName="opacity" values="0.65;1;0.65" dur="3.2s" repeatCount="indefinite" />
    </text>
  </svg>
</p>

---

## 🧊 Overview

This project showcases:

- A modern hero section with interactive wave visuals
- Custom WebGL components powered by `ogl`
- A curated collection section and clean landing-page layout
- Lightweight tooling via Vite for fast iteration

## ⚙️ Tech Stack

- **React 18**
- **Vite**
- **OGL** (WebGL utility library)
- **CSS**

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` — Start local dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build locally

## 🗂️ Project Structure

```text
src/
  App.jsx
  App.css
  index.css
  main.jsx
  components/
    PatternWaves.jsx
    PatternWaves.css
    CrystalizedBall.jsx
    CrystalizedBall.css
```

## 🎨 Visual Components

- **PatternWaves**: interactive background-like wave surface with presets
- **CrystalizedBall**: high-energy crystal orb shader component ready for expansion

## 🛠️ Customization Notes

- Update hero text and call-to-actions in `/src/App.jsx`
- Tweak visual presets in:
  - `/src/components/PatternWaves.jsx`
  - `/src/components/CrystalizedBall.jsx`
- Adjust global styling in `/src/App.css` and `/src/index.css`

---

<p align="center">
  <svg width="220" height="32" viewBox="0 0 220 32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated divider">
    <line x1="10" y1="16" x2="210" y2="16" stroke="#9bb6ff" stroke-width="1.5" stroke-dasharray="8 8">
      <animate attributeName="stroke-dashoffset" values="0;-64" dur="2.4s" repeatCount="indefinite" />
    </line>
    <circle cx="110" cy="16" r="4" fill="#f8d5ff">
      <animate attributeName="r" values="3;6;3" dur="1.8s" repeatCount="indefinite" />
    </circle>
  </svg>
</p>

Built with glow, glass, and gradients. ✨
