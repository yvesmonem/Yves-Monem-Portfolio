# Yves Monem - Portfolio Website

A modern, elegant portfolio website for Yves Monem, a Blockchain Frontend Developer. Built with Next.js 14, React, TypeScript, TailwindCSS, and Framer Motion.

## ✨ Features

- 🌗 **Dark Mode** - Beautiful dark theme by default
- 🎨 **Modern Design** - Clean, minimal UI with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Performance** - Built with Next.js App Router for optimal performance
- 🎭 **Animations** - Subtle scroll animations using Framer Motion
- 🎯 **SEO Optimized** - Comprehensive metadata for search engines
- ♿ **Accessible** - Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (via next/font)

## 📂 Project Structure

```
yves-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project is ready to deploy on **Vercel**, **Netlify**, or any platform that supports Next.js.

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live on yvesmonem.com (configure custom domain in Vercel settings)

### Environment Setup

No environment variables are required for the basic setup. If you add contact forms or analytics, create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

## 🎨 Customization

### Update Personal Information

1. **Social Links:** Edit `components/Hero.tsx` and `components/Contact.tsx`
2. **Biography:** Edit `components/About.tsx`
3. **Skills:** Edit `components/Skills.tsx`
4. **Projects:** Edit `components/Projects.tsx`
5. **Email:** Update all instances of `yves@yvesmonem.com`

### Color Scheme

Colors are defined in `tailwind.config.ts`:

- `primary`: Blue tones
- `accent`: Purple tones

### Fonts

Change the font in `app/layout.tsx` by importing a different Google Font.

## 📝 Sections

1. **Navbar** - Smooth scroll navigation
2. **Hero** - Introduction with social links
3. **About** - Professional biography
4. **Skills** - Technology stack showcase
5. **Projects** - Featured project cards
6. **Contact** - Contact information and CTA
7. **Footer** - Copyright and credits

## 🐛 Troubleshooting

If you encounter issues:

1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Clear browser cache
4. Restart development server

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Yves Monem**

- Website: [yvesmonem.com](https://yvesmonem.com)
- GitHub: [@yvesmonem](https://github.com/yvesmonem)
- LinkedIn: [Yves Monem](https://linkedin.com/in/yvesmonem)

---

Built with ❤️ using Next.js & TailwindCSS
