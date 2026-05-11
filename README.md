# 🏠 Roomify — AI Floor Plan Visualizer

An AI-powered full-stack web app that transforms architectural floor plans 
into photorealistic room visualizations. Upload any floor plan image and 
watch AI render it into a fully furnished, detailed interior layout.

> Built with React, TypeScript, and Puter.js — deployed for free with zero backend cost.

## 📸 Screenshots

### Landing Page

<img width="1920" height="1080" alt="roomify_1_homepage" src="https://github.com/user-attachments/assets/f71dda80-442f-422f-8de6-6d4059e0f01d" />

### AI Visualizer — Rendered Floor Plan

<img width="1920" height="1080" alt="roomify_2_upload" src="https://github.com/user-attachments/assets/3fd8edd6-e439-41c2-8379-0170fb353cd8" />

### Exported Render Result

<img width="1920" height="1080" alt="roomify_4_visualizer" src="https://github.com/user-attachments/assets/bcf2dca3-8fc0-4d9d-8c5f-f9e34602d34a" />

### Upload Screen

<img width="1920" height="1080" alt="roomify_5_rendered" src="https://github.com/user-attachments/assets/85fe2e8b-d096-4c69-a3f6-37e9862be998" />


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
