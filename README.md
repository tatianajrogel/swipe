# DoTheySwipe
> Find out if they're secretly on Tinder.

DoTheySwipe is a Progressive Web App (PWA) built with React and Vite. 
This project was a full Figma-to-code implementation — I translated 
the complete UI/UX design into pixel-perfect React components using 
Tailwind CSS, then configured it as an installable PWA with offline 
support and native-like behavior across iOS, Android, and desktop.

---

## Role
Design & Frontend Implementation by **Tatiana Gomez**

Scope of work:
- Translated Figma designs into pixel-perfect React components
- Built full component library matching design tokens exactly
- Implemented responsive layouts across mobile and desktop
- Configured PWA with vite-plugin-pwa for installability and offline caching
- Structured clean, modular component architecture for easy handoff

---

## Tech Stack
| Technology | Version |
|---|---|
| React | 19 |
| Vite | 7 |
| React Router DOM | 7 |
| Tailwind CSS | 4 |
| Swiper | 11 |
| Radix UI | 2 |
| Lucide React | latest |
| vite-plugin-pwa | latest |

---

## PWA Implementation
DoTheySwipe is fully installable as a Progressive Web App:
- **Desktop (Chrome/Edge):** Install icon in address bar
- **iOS (Safari):** Share → Add to Home Screen  
- **Android (Chrome):** Menu → Add to Home Screen

Key assets are cached on first load for offline functionality 
after installation — matching native app behavior.

---

## Prerequisites
- Node.js 18 or later
- npm 9 or later

---

## Quick Start
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

---

## Scripts
| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure
```
DoTheySwipe/
├── public/
├── src/
│   ├── assets/images/
│   ├── components/
│   │   ├── contactUs/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── home/
│   │   ├── location/
│   │   ├── profile/
│   │   ├── profileDetail/
│   │   ├── search/
│   │   └── shared/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```
---

## Routes
| Path | Page |
|---|---|
| `/` | Home |
| `/search` | Search |
| `/profile` | Profile listings |
| `/profileDetails` | Profile detail |
| `/location` | Location |
| `/about` | About |
| `/faq` | FAQ |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |

---

## License
All rights reserved © Tatiana Gomez