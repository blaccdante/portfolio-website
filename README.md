# Portfolio Website

A modern, responsive portfolio website showcasing software engineering projects, Web3 work, and creative technologies. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - works on all devices
- **GitHub API Integration** - dynamically fetch repositories
- **Contact Form** - get in touch easily
- **Media Gallery** - showcase projects and work
- **Skills Section** - highlight technical expertise
- **CV/Resume Download** - downloadable portfolio assets

## 📸 Screenshots

### Desktop Views

![Portfolio Screenshot 1](screenshots/portfolio-screenshot-1.png)

![Portfolio Screenshot 2](screenshots/portfolio-screenshot-2.png)

![Portfolio Screenshot 3](screenshots/portfolio-screenshot-3.png)

![Portfolio Screenshot 4](screenshots/portfolio-screenshot-4.png)

![Portfolio Screenshot 5](screenshots/portfolio-screenshot-5.png)

## 🛠️ Built With

- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://reactjs.org/)** - UI library
- **GitHub API** - Dynamic repository fetching

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone https://github.com/blaccdante/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## 📂 Project Structure

```
portfolio-website/
├── public/                 # Static assets
│   ├── assets/            # Images, videos, CV
│   └── *.svg              # SVG icons
├── screenshots/           # Portfolio screenshots for README
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ContactForm.tsx
│   │   ├── GitHubRepos.tsx
│   │   ├── MediaGallery.tsx
│   │   └── SkillsSection.tsx
│   ├── data/            # Static data
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── backend/             # Express backend (legacy)
├── frontend/            # Vite frontend (legacy)
└── README.md
```

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Alternatively, you can deploy to:
- **Vercel** (Recommended)
- **Netlify**
- **Railway**
- **Any Node.js hosting service**

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ✨ Features Overview

- **Dynamic GitHub Integration**: Automatically fetches and displays your latest repositories
- **Interactive Media Gallery**: Showcases projects with images and videos
- **Skills Visualization**: Clean display of technical skills and expertise
- **Contact Form**: Easy way for visitors to get in touch
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **CV Download**: Direct access to downloadable resume/portfolio

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
