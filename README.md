# Gospel Global Rescue Mission

A world-class modern ministry website built with React + Vite + Tailwind CSS.

## 🚀 Tech Stack

- **React 18** + **Vite 5** – Fast, modern frontend build
- **Tailwind CSS 3** – Utility-first styling with custom design system
- **React Router 6** – Client-side routing for all 9 pages
- **Framer Motion** – Smooth animations and scroll reveals
- **Lucide React** – Clean, consistent icon set

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, Layout wrapper
│   └── ui/             # Reusable UI components
├── hooks/              # useScrollReveal, useCounter
├── pages/              # Home, About, Mission, Outreach, GlobalMissions,
│                       # Volunteer, Prayer, Donate, Contact
├── App.jsx             # Router setup
├── main.jsx            # Entry point
└── index.css           # Global styles + Tailwind directives
```

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment (Netlify)

1. Push to GitHub repository
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The `netlify.toml` handles redirects automatically

### Environment Variables

Create `.env` file for any API keys:
```
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_FLUTTERWAVE_PUBLIC_KEY=your_flutterwave_key
```

## 🎨 Design System

| Color | Usage |
|-------|-------|
| Navy 950 (#050e22) | Primary background |
| Navy 900 (#0a1a3a) | Secondary background |
| Gold 400 (#fec84b) | Primary accent / CTA |
| White | Text on dark |

**Fonts:**
- Playfair Display — Display headings
- DM Sans — UI / Body text
- Source Serif 4 — Testimonials / Quotes

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/mission` | Our Mission |
| `/outreach` | Outreach Programs |
| `/global-missions` | Global Missions |
| `/volunteer` | Volunteer |
| `/prayer` | Prayer Requests |
| `/donate` | Donate |
| `/contact` | Contact |

## 💳 Payment Integration

Donation page includes UI placeholders for:
- **Stripe** — Add `@stripe/stripe-js` and integrate with your account
- **PayPal** — Add `@paypal/react-paypal-js` SDK
- **Flutterwave** — Add `flutterwave-react-v3` package
- **Bank Transfer** — Static wire transfer details

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Focus management for keyboard navigation
- Color contrast meets WCAG AA standards

## 📈 Performance

- Code-split vendor chunks
- Lazy loading on all images
- Optimized font loading with `font-display: swap`
- Netlify CDN caching headers configured
- Intersection Observer for scroll animations (no layout thrash)

---

*Built for the glory of God and the blessing of the nations.*
