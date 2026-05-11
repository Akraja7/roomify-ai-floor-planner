# 🏠 Roomify — AI Floor Plan Visualizer

An AI-powered full-stack web app that transforms architectural floor plans 
into photorealistic room visualizations. Upload any floor plan image and 
watch AI render it into a fully furnished, detailed interior layout.

> Built with React, TypeScript, and Puter.js — deployed for free with zero backend cost.

## 📸 Screenshots

### Landing Page
![Homepage](screenshots/roomify_1_homepage.png)

### AI Visualizer — Rendered Floor Plan
![Visualizer](screenshots/roomify_4_visualizer.png)

### Exported Render Result
![Rendered](screenshots/roomify_5_rendered.png)

### Upload Screen
![Upload](screenshots/roomify_2_upload.png)

## ✨ Features

- 🖼️ Upload any floor plan image (JPG, PNG, up to 50MB)
- 🤖 AI renders the floor plan into a photorealistic furnished layout
- 🔍 Interactive visualizer with zoom in/out and pan controls
- 📤 Export and share your rendered design
- 🔐 User authentication via Puter.js
- ☁️ Cloud file storage — no backend server needed
- 📱 Clean, responsive UI with a professional design system

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React, TypeScript, React Router |
| AI Rendering | Puter.js AI APIs |
| Auth & Storage | Puter.js (cloud filesystem) |
| Styling | CSS / Tailwind |
| Deployment | Puter.site (free hosting) |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A free [Puter](https://puter.com) account

### Installation

```bash
git clone https://github.com/Akraja7/roomify-ai-floor-planner.git
cd roomify-ai-floor-planner
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Deployment

This app deploys for free on Puter.site with no backend required:
```bash
npm run build
# Deploy the dist/ folder to Puter.site
```

## 🔮 Future Plans

- [ ] Multiple rendering styles (modern, classic, minimalist)
- [ ] Room-by-room breakdown and furniture suggestions
- [ ] Collaborative sharing with live preview links
- [ ] Mobile app version

## 📄 License

MIT License
