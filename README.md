# 🌐 Portfolio — Personal Website

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-teal?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com/)

A sleek and modern personal portfolio website built with **Next.js 14** and **TypeScript**, designed to showcase projects, skills, resume, and changelog.  
Deployed seamlessly with **Vercel**, styled with **Tailwind CSS** and **NextUI**, and enhanced with **Framer Motion** animations.

---

## ✨ Features

- ⚡ Built with **Next.js App Router**
- 🎨 **Tailwind CSS + NextUI** for styling
- 🌓 **Dark/Light mode** support via `next-themes`
- 💫 Smooth **animations** with `framer-motion`
- 📱 Responsive layout using `react-device-detect`
- 📋 Pages for **About**, **Projects**, **Products**, **Toolbox**, **Changelog**, and **Resume**
- 🧩 Reusable UI components (BentoGrid, WobbleCard, Meteors, ThemeSwitcher, etc.)
- 🌐 Configured for **Vercel deployment** with redirects

---

## 🧠 Project Structure

```
portfolio/
├── app/               # App Router pages (about, projects, resume, etc.)
├── components/        # Reusable UI components
├── lib/                # Configs, animations, and helpers
├── providers/         # Context providers (NextUIProvider)
├── public/             # Static assets (images, icons, textures)
├── styles/             # Global styles
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── vercel.json
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/adityamishra9/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
bun install
# or
npm install
# or
yarn install
```

### 3. Run the development server
```bash
bun dev
# or
npm run dev
# or
yarn dev
```

Open **http://localhost:3000** in your browser to see the app.

---

## 🚀 Build & Deployment

To create a production build:
```bash
bun run build
bun start
```

This project is configured to deploy on **Vercel** out-of-the-box.  
`vercel.json` handles custom host-based redirects (resume, docs).

---

## 📝 Roadmap

- [ ] Add further details
- [ ] Add blog section
- [ ] Enhance SEO and metadata

---

## 👨‍💻 Author

**Aditya Mishra**  
🌐 [Portfolio](https://adityamishra.tech)  
💼 [LinkedIn](https://linkedin.com/in/adityamishra9)  
📂 [GitHub](https://github.com/adityamishra9)

---
