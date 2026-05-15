# 🚀 Prodigy - Premium SaaS Landing Page

A modern, fully responsive SaaS landing page built with **React**, **Tailwind CSS**, and **Framer Motion**. Perfect for AI-powered productivity platforms.

## ✨ Features

### 🎨 Design
- **Modern glassmorphism** effects with frosted glass cards
- **Smooth gradient** backgrounds and animated elements
- **Soft shadow** styling for depth and elegance
- **Responsive design** - Mobile-first approach
- **Professional typography** and spacing

### 🎭 Components
1. **Sticky Navbar** - Responsive mobile menu with smooth transitions
2. **Hero Section** - Eye-catching headline with floating dashboard preview
3. **Trusted By** - Company logos in glassmorphism cards
4. **Features** - 6 feature cards with icons and hover effects
5. **How It Works** - 4-step onboarding process with connectors
6. **Dashboard Preview** - Animated product showcase
7. **Pricing** - 3 pricing tiers with Pro plan highlighted
8. **Testimonials** - Customer success stories with ratings
9. **FAQ** - Expandable questions with smooth animations
10. **CTA Banner** - Call-to-action section
11. **Footer** - Newsletter signup, links, and social media

### 🎬 Animations
- **Stagger animations** on page load
- **Hover effects** with elevation and shadows
- **Floating elements** with sine wave motion
- **Expandable FAQ** with smooth height transitions
- **Scroll-triggered animations** with Intersection Observer
- **Button interactions** with tap feedback

### 📱 Responsive
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions
- Optimized mobile menu

## 🛠️ Tech Stack

- **React 18.2** - UI library
- **Vite 4.3** - Build tool
- **Tailwind CSS 3.3** - Utility-first styling
- **Framer Motion 10.16** - Animation library
- **Lucide React 0.263** - Icon library

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

```bash
# Clone the repository
git clone https://github.com/domenicmertz/SaaS-Landing-Page-With-React.git
cd SaaS-Landing-Page-With-React

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           - Navigation bar with mobile menu
│   ├── Hero.jsx             - Hero section
│   ├── TrustedBy.jsx        - Company logos carousel
│   ├── Features.jsx         - Feature cards grid
│   ├── HowItWorks.jsx       - Process steps
│   ├── DashboardPreview.jsx - Product showcase
│   ├── Pricing.jsx          - Pricing cards
│   ├── Testimonials.jsx     - Customer testimonials
│   ├── FAQ.jsx              - FAQ accordion
│   ├── CTABanner.jsx        - Call-to-action section
│   └── Footer.jsx           - Footer with newsletter
├── App.jsx                  - Main app component
├── index.css                - Custom styles and animations
└── main.jsx                 - Entry point

Public/
├── index.html               - HTML template
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#6366F1',        // Indigo
  secondary: '#8B5CF6',      // Purple
}
```

### Content
- Update text content in individual component files
- Replace company logos in `TrustedBy.jsx`
- Modify pricing plans in `Pricing.jsx`
- Update testimonials in `Testimonials.jsx`

### Fonts
The project uses system fonts by default. To add custom fonts:

1. Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}
```

## 🎯 Performance

- ✅ Lightweight and fast (lazy-loaded components)
- ✅ Optimized animations with GPU acceleration
- ✅ Responsive images and assets
- ✅ Clean, maintainable code

## ♿ Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Focus states for keyboard navigation
- ✅ Color contrast compliance
- ✅ Mobile-friendly touch targets

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4",
  "lucide-react": "^0.263.0",
  "tailwindcss": "^3.3.0"
}
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Support

For questions or issues, please open a GitHub issue or reach out to the maintainers.

---

**Built with ❤️ for modern SaaS platforms**
