# bosq.dev - Advanced Data & AI Solutions

A modern, responsive website showcasing bosq.dev's cutting-edge data and AI products. Built with React, Vite, and Tailwind CSS, featuring smooth animations and a sleek dark theme.

## 🚀 Features

- **Modern Design**: Sleek dark theme with gradient effects and glass morphism
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Product Showcase**: Three main products - Data Market, Multi-Agent System, and ETL Platform
- **Interactive Components**: Toast notifications, smooth scrolling, and hover effects
- **SEO Optimized**: React Helmet for meta tags and social media optimization

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 4.4.5
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 10.16.4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **SEO**: React Helmet

## 📦 Products

### 1. Data Market
A comprehensive marketplace where organizations can securely buy and sell high-quality datasets with quality verification and licensing management.

### 2. Multi-Agent System
Build and deploy sophisticated multi-agent AI systems with visual agent builder, real-time orchestration, and scalable deployment.

### 3. ETL Platform
Seamlessly extract, transform, and load data from multiple sources including SQL databases, web scraping, SharePoint, and NoSQL systems with no-code transformations.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx          # Reusable product card component
│   └── ui/                      # UI component library
│       ├── button.tsx
│       ├── toast.jsx
│       ├── toaster.jsx
│       └── use-toast.jsx
├── lib/
│   └── utils.js                 # Utility functions
├── App.jsx                      # Main application component
├── main.jsx                     # Application entry point
└── index.css                    # Global styles
```

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

- **Dark Theme**: Black background with gradient accents
- **Glass Morphism**: Translucent elements with backdrop blur
- **Gradient Text**: Animated gradient text effects
- **Responsive Design**: Mobile-first approach with breakpoints
- **Custom Animations**: Floating elements and smooth transitions

## 🔧 Configuration

### Vite Configuration
- React plugin enabled
- Path aliases configured (`@` points to `src`)
- Base path set to root

### Tailwind Configuration
- Custom color palette
- Extended animations
- Custom utilities for glass effects

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🌐 SEO & Social Media

- Meta tags for search engines
- Open Graph tags for social media sharing
- Structured data for better search visibility
- Optimized images and assets

## 🚀 Deployment

The project is configured for easy deployment to static hosting services:

1. Run `npm run build` to create production build
2. Deploy the `dist` folder to your hosting service
3. Configure your server to serve `index.html` for all routes (SPA routing)

## 📞 Contact

- **Email**: contact@bosq.dev
- **Location**: Porto Alegre, RS - Brazil
- **GitHub**: [@bosq-dev](https://github.com/bosq-dev)
- **LinkedIn**: [bosq.dev Dev](https://www.linkedin.com/company/bosq-dev)
- **Twitter**: [@bosq_dev](https://x.com/bosq_dev)

## 📄 License

This project is private and proprietary to bosq.dev.

## 🤝 Contributing

This is a private project. For any suggestions or issues, please contact the development team.

---

**bosq.dev** - Transforming businesses through data and AI
