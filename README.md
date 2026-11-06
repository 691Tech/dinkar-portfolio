# Dinkar Kumar — AI Engineer & Full-Stack Developer Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Site-dinkarkumar--portfolio.web.app-E06A26?style=for-the-badge&logo=firebase&logoColor=white)](https://dinkarkumar-portfolio.web.app)
[![Version](https://img.shields.io/badge/Release-v2.5.0_Production-1C1613?style=for-the-badge&logo=github)](https://github.com/691Tech/dinkar-portfolio)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting_%26_RTDB-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<br/>

**A handcrafted, editorial, light-themed engineering portfolio built from first principles for [Dinkar Kumar](https://github.com/691Tech).**  
Computer Science Engineering (Artificial Intelligence) student at **Parul University, Vadodara** (2025–2029) &bull; CBSE Class XI: **94%**.

[Explore Live Website](https://dinkarkumar-portfolio.web.app) &bull; [View Resume PDF](https://dinkarkumar-portfolio.web.app/Dinkar_Kumar_Resume.pdf) &bull; [Inspect GitHub Repos](https://github.com/691Tech)

</div>

---

## 📖 Table of Contents

- [Architectural Philosophy & Design Identity](#-architectural-philosophy--design-identity)
- [Key Highlights & Flagship Interactive Sandboxes](#-flagship-interactive-sandboxes)
- [12 High-Impact Technical Features](#-12-high-impact-technical-features)
- [Curated Open-Source Systems Catalog (30+ Repos)](#-curated-open-source-systems-catalog)
- [Complete Tech Stack](#-complete-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started Locally](#-getting-started-locally)
- [Firebase Hosting Deployment](#-firebase-hosting-deployment)
- [Release Changelog (v2.5.0)](#-release-changelog)
- [Contact Coordinates](#-contact-coordinates)

---

## 🎨 Architectural Philosophy & Design Identity

Unlike standard developer templates saturated with dark mode, generic blue-purple gradients, or heavy 3D gimmicks, this portfolio is built upon an **authentic, warm editorial aesthetic**:

- **Light Canvas Palette**: Warm alabaster & linen canvas (`#FAF8F5`, `#FFFFFF`), deep espresso typography (`#1C1613`), terracotta honey accents (`#E06A26`), and sage olive highlights (`#2E7D5B`).
- **Precision Typography**:
  - `Instrument Serif`: Editorial display titles and poetic narrative accents.
  - `Outfit`: High-authority geometric section headings.
  - `Manrope`: Readable, balanced body copy.
  - `JetBrains Mono`: Architectural telemetry, API contracts, and code coordinates.
- **Hardware-Accelerated 60 FPS Performance**:
  - CSS GPU layer isolation (`transform: translate3d(0, 0, 0)`, `backface-visibility: hidden`).
  - `requestAnimationFrame` throttled scroll listener eliminating layout thrashing (`getBoundingClientRect()`).
  - Mobile touch momentum swipe rails (`overflow-x-auto no-scrollbar touch-pan-x`).
  - Strict zero 3D overhead & zero WebGL lag.

---

## ⚡ Flagship Interactive Sandboxes

Clicking on any project opens a **bespoke, compact, borderless slate** featuring a live hands-on simulator alongside real production API contracts:

| Flagship System | Core Technologies | Live Simulator Capability | Key Production Metric |
| :--- | :--- | :--- | :--- |
| **Full-Stack E-Commerce** | React 19, Node.js, Express, MongoDB, Redux | Dynamic cart state sync, coupon calculations, instant order dispatch (`#ORD-98214`) | 100% ACID order transactions |
| **Real-Time WebSocket Chat** | Socket.io, Node.js, Express, MongoDB | Dual-client persona toggle (`Recruiter ↔ Dinkar`), live typing indicator, event broadcast | Sub-42ms packet transit time |
| **AI Credit Card Fraud Detector** | Python, Keras / TensorFlow, Flask REST | Real-time transaction ingestion, MSE reconstruction loss gauge vs 0.042 threshold | 98.4% precision on 284K+ txns |
| **High-Throughput Packet Sniffer** | C / C++, Raw Sockets, Linux Kernel APIs | Live packet stream decoder (TCP, UDP, TLS), header parser, and hex dump inspector | Zero-copy kernel buffer reads |
| **Smart Campus ERP Portal** | React, Node.js, Express, MongoDB | Interactive semester CGPA calculator, dynamic credit evaluation, course enrollment | 100% real-time grade recalculation |
| **Core DSA & Algorithmic Engine** | Java 21 LTS, Min-Heap, JUnit 5 | Interactive array sorting visualizer (Shuffle, Step Sort, asymptotic bounds display) | 250+ optimal LeetCode solutions |

---

## 🚀 12 High-Impact Technical Features

This portfolio integrates 12 thoughtful production features engineered for power users, interviewers, and recruiters:

1. **Global Command Palette (`Ctrl+K` / `⌘K`)**:
   Keyboard-driven modal with fuzzy search, instant section jumps, resume downloads, email copy, and audio toggles.
2. **Interactive Live Code Playground (`CodePlayground.tsx`)**:
   Interactive code runner supporting 4 production implementations (React Optimistic Hook, Node Socket.io Broadcast, Python Autoencoder Anomaly, Java Dijkstra Min-Heap) with simulated terminal execution output.
3. **Live IST Vadodara Clock (Navbar)**:
   Real-time ticking clock showing local Indian Standard Time in Vadodara (`14:48 IST • Vadodara, IN`).
4. **Dynamic Latency Ping Telemetry**:
   Real-time backend round-trip latency indicator in Hero (`24ms Ping • Live`).
5. **Tactile Sound Effects Engine (Web Audio API)**:
   Zero-asset synthetic mechanical click synthesizer with volume mute/unmute control.
6. **One-Tap Share & Vector QR Code Modal (`ShareModal.tsx`)**:
   Instant mobile camera scanning for campus placements, plus 1-click LinkedIn and WhatsApp share.
7. **Dynamic Engineering Stats Pill Banner**:
   Live statistics counters tracking curated repos, flagship sandboxes, DSA problem milestones, and CBSE board scores.
8. **Interactive Skill Architectural Inspector (`SkillsSection.tsx`)**:
   Expandable skill cards revealing design patterns (Custom Hooks, Event Loops, BSON schemas, Dijkstra Min-Heap) and production benchmarks.
9. **Verified Peer & Faculty Recommendations (`TestimonialsSection.tsx`)**:
   Verified endorsements with star ratings and collaborator context from Parul University mentors and hackathon peers.
10. **Circular Scroll Progress Ring & Back-to-Top (`ScrollProgress.tsx`)**:
    Floating bottom indicator tracking exact 0–100% page scroll progress with one-click smooth scroll.
11. **Instant Clipboard Toast Notifications (`ToastProvider`)**:
    Floating toast feedback when copying emails, clone commands, or code snippets.
12. **Interactive Developer CLI Terminal (`TerminalConsole.tsx`)**:
    Interactive console where recruiters can type commands like `help`, `projects`, `skills`, `education`, `contact`, `hire`, `clear`.

---

## 📚 Curated Open-Source Systems Catalog

The portfolio features **30+ open-source repositories** categorized across key computer science domains:

- **Full-Stack & APIs**: Taskcafe Kanban Board, Social Media Application, Quick Food Delivery, React Cryptocurrency Live Tracker, Movie Entertainment Hub, Photo Cloud Vault.
- **AI & Data Science**: Fake News NLP Classifier, Speech Emotion Classifier, Stock Market Predictor, Movie Recommender Engine, Deep Learning Autoencoder.
- **Java Systems**: Hospital Management System, Banking System with JDBC, Scientific Data Visualization (Groot), Student ERP Suite.
- **DSA & C++ Core**: C++ Sorting Visualizer, Banking System with AVL Trees, Dijkstra Routing Engine.

---

## 🛠️ Complete Tech Stack

```
Frontend:          React 19.3.0 &bull; Next.js 16.4.5 (App Router, Turbopack)
Styling:           Tailwind CSS v4 &bull; Custom CSS Variables &bull; Hardware Acceleration
Typography:        Instrument Serif &bull; Outfit &bull; Manrope &bull; JetBrains Mono
Icons:             Lucide React &bull; Bespoke Vector SVGs
Audio:             Web Audio API Synthetic Engine (Zero External Audio Assets)
Cloud & Database:  Firebase Hosting &bull; Realtime Database &bull; Cloud Firestore
Language:          TypeScript 5.0 (Strict Mode, 100% Type-Safe)
Version Control:   Git &bull; GitHub (@691Tech)
Deployment:        Firebase Hosting (Production URL: dinkarkumar-portfolio.web.app)
```

---

## 📁 Project Directory Structure

```
dinkar-portfolio/
├── public/
│   ├── Dinkar_Kumar_Resume.pdf        # Official PDF Curriculum Vitae
│   ├── favicon.ico                    # High-res favicon
│   └── images/                        # Vector SVGs (XML-sanitized)
│       ├── ai-fraud-preview.svg       # Neural Network Anomaly Radar
│       ├── campus-preview.svg         # Student ERP Portal Preview
│       ├── chat-preview.svg           # Real-Time WebSocket Chat
│       ├── dsa-preview.svg            # Algorithmic Graph & Heap
│       ├── ecommerce-preview.svg      # Full-Stack Commerce UI
│       └── packet-sniffer-preview.svg # Low-Level Network Telemetry
├── src/
│   ├── app/
│   │   ├── globals.css                # Tailwind v4, Hardware Acceleration & Typography
│   │   ├── layout.tsx                 # Metadata, Font Optimization & SEO Tags
│   │   └── page.tsx                   # Main Composition & Modals Architecture
│   ├── components/
│   │   ├── AboutSection.tsx           # Verified Developer Credentials & Biography
│   │   ├── AdminPortal.tsx            # Protected PIN Administrator Console (PIN: 6910)
│   │   ├── AnnouncementBar.tsx        # Top Dismissible Status Banner
│   │   ├── CodePlayground.tsx         # Interactive Code Sandbox with 4 Production Snippets
│   │   ├── CommandPalette.tsx         # Global Ctrl+K / Cmd+K Search Modal
│   │   ├── ContactSection.tsx         # Working Firebase Form with Client Fallback
│   │   ├── DomainFilter.tsx           # Touch-Friendly Category Filter Pills
│   │   ├── EducationTimeline.tsx      # Parul University & Academic Milestones
│   │   ├── FaqSection.tsx             # Interactive Frequently Asked Questions
│   │   ├── FeaturedProjects.tsx       # Flagship Project Grid + 30+ Repo Catalog
│   │   ├── Footer.tsx                 # Editorial Watermark Signature & Coordinates
│   │   ├── GitHubStats.tsx            # 52-Week Contribution Activity Heatmap
│   │   ├── Hero.tsx                   # Editorial Headline, Live Ping & Code Radar
│   │   ├── Icons.tsx                  # Custom Vector SVG GitHub & LinkedIn Icons
│   │   ├── MouseSpotlight.tsx         # Ambient Light-Amber Cursor Glow
│   │   ├── Navbar.tsx                 # Header with Live Vadodara Clock (IST) & Tools
│   │   ├── ProjectModal.tsx           # Compact Borderless Slate with 6 Live Simulators
│   │   ├── ResumeModal.tsx            # Interactive In-Browser Resume Viewer
│   │   ├── ScrollProgress.tsx         # Circular SVG Progress Ring & Back-to-Top
│   │   ├── ShareModal.tsx             # QR Code & Social Share Card
│   │   ├── SkillsSection.tsx          # Technical Matrix with Design Pattern Inspector
│   │   ├── TerminalConsole.tsx        # Interactive Developer CLI Easter Egg
│   │   ├── TestimonialsSection.tsx    # Verified Peer & Faculty Recommendations
│   │   └── Toast.tsx                  # Animated Clipboard Feedback Notification
│   ├── data/
│   │   └── portfolio.ts               # Complete Single Source of Truth Portfolio Data
│   └── lib/
│       ├── firebase.ts                # Firebase RTDB & Firestore Service Initialization
│       └── sound.ts                   # Web Audio API Tactile Sound Synthesizer
├── next.config.ts                     # Static Export Configuration
├── package.json                       # Dependencies & Version 2.5.0
└── tsconfig.json                      # Strict TypeScript Rules
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `v20.0.0` or higher
- npm or yarn or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/691Tech/dinkar-portfolio.git
cd dinkar-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run TypeScript validation
```bash
npx tsc --noEmit
```

### 5. Build for production & export
```bash
npm run build
```
Static artifacts will be generated in the `out/` directory.

---

## ☁️ Firebase Hosting Deployment

The website is continuously deployed to Firebase Hosting on the project `student-hub-dc82f`:

```bash
# Deploy static export to live hosting
npx -y firebase-tools deploy --only hosting --project student-hub-dc82f
```

Custom Site ID: `dinkarkumar-portfolio`  
Live URL: **https://dinkarkumar-portfolio.web.app**

---

## 📜 Release Changelog

### Version 2.5.0 (Latest Release — November 2026)
- **SVG XML Entity Sanitization**: Fixed XML entity encoding (`&bull;` &rarr; `&#8226;`, `&` &rarr; `&amp;`) ensuring 100% rendering reliability across Safari, Chrome, Edge, and Firefox.
- **12 High-Impact Technical Features**:
  - Global Command Palette (`Ctrl+K` / `⌘K`)
  - Interactive Live Code Playground & Syntax Snippet Runner with 4 production algorithms
  - Live Vadodara Clock (IST) in Navbar
  - Real-time Network Latency Ping Telemetry (`24ms Ping • Live`)
  - Web Audio API Tactile Sound Engine with Mute/Unmute
  - One-Tap Share Portfolio with SVG QR Code for mobile cameras
  - Dynamic Project Filter Quick-Metrics Banner
  - Interactive Skill Architectural Inspector with pattern benchmarks
  - Verified Peer & Faculty Recommendations Section
  - Circular SVG Scroll Progress Ring with Back-to-Top
  - Instant Clipboard Toast Notifications
  - Interactive Developer Terminal / CLI Easter Egg
- **Complete 3D Removal**: Cleaned all lingering 3D `<model-viewer>` dependencies and isometric graphics in favor of a clean, authentic developer credentials slate.
- **Performance**: 0ms layout thrashing via `requestAnimationFrame` and CSS hardware acceleration.

### Version 2.0.0
- Added 30+ curated repositories from `workwithharryy.com`.
- Integrated 6 flagship project sandboxes (E-Commerce, WebSocket Chat, AI Fraud Anomaly, Packet Sniffer, Campus Portal, DSA Engine).
- Upgraded to Next.js 16 with static HTML export for instant CDN delivery.

### Version 1.0.0
- Initial portfolio release with Firebase RTDB integration, protected admin console, and editorial light theme.

---

## 📬 Contact Coordinates

- **Candidate**: **Dinkar Kumar**
- **University**: Parul University, Vadodara, Gujarat, India (B.Tech CSE - AI, 2025–2029)
- **Email**: [dinkarkr691@gmail.com](mailto:dinkarkr691@gmail.com)
- **Phone**: [+91 9204267569](tel:+919204267569)
- **LinkedIn**: [linkedin.com/in/dinkarkumar0809](https://www.linkedin.com/in/dinkarkumar0809/)
- **GitHub**: [github.com/691Tech](https://github.com/691Tech)
- **Live Portfolio**: [https://dinkarkumar-portfolio.web.app](https://dinkarkumar-portfolio.web.app)

---

<div align="center">
Designed &amp; Engineered with pride by <strong>Dinkar Kumar</strong> &bull; Vadodara, Gujarat, India
</div>
