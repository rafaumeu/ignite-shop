# Ignite Shop

<p align="center">
  <img src="https://img.shields.io/badge/%F0%9F%9B%8D-Ignite%20Shop-blueviolet?style=for-the-badge" alt="Ignite Shop">
</p>

## 🛍️ Overview

Ignite Shop is a modern e-commerce application for buying developer t-shirts, built as part of the [Rocketseat Ignite Program](https://www.rocketseat.com.br/). It features a full shopping cart experience with Stripe-powered checkout.

---

## 🌟 Features

- **Product Catalog** — Horizontal carousel powered by Keen Slider
- **Product Detail Pages** — SSG with ISR for blazing-fast load times
- **Shopping Cart** — Slide-in sidebar with quantity controls and real-time totals
- **Stripe Checkout** — Secure multi-item payment via Stripe Checkout Sessions
- **Success Page** — Order confirmation with product details from Stripe
- **Responsive Design** — Stitches CSS-in-JS with a custom dark theme

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Stitches-000000?style=for-the-badge&logo=css3&logoColor=white" alt="Stitches">
  <img src="https://img.shields.io/badge/Keen_Slider-FF6B6B?style=for-the-badge" alt="Keen Slider">
  <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe">
</p>

---

## 📂 Project Structure

```
ignite-shop/
├── src/
│   ├── assets/              # Static assets (logo SVG)
│   ├── components/          # UI components
│   │   └── CartSidebar.tsx  # Shopping cart slide-in drawer
│   ├── contexts/            # React contexts
│   │   └── CartContext.tsx  # Cart state management
│   ├── lib/                 # Library configuration
│   │   └── stripe.ts       # Stripe server client
│   ├── pages/               # Next.js Pages Router
│   │   ├── api/
│   │   │   └── checkout.ts  # Stripe Checkout Session API
│   │   ├── product/
│   │   │   └── [id].tsx     # Product detail (SSG + ISR)
│   │   ├── _app.tsx         # App shell with cart provider
│   │   ├── _document.tsx    # Custom document (Stitches SSR)
│   │   ├── index.tsx        # Home — product carousel
│   │   └── success.tsx      # Checkout success (SSR)
│   └── styles/              # Stitches design system
│       ├── components/      # Component styles (cart sidebar)
│       ├── pages/           # Page-level styles
│       ├── global.ts        # Global CSS reset
│       └── index.ts         # Stitches theme config
├── .env.example
├── next.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- [Stripe account](https://stripe.com) with products configured

### Installation

```bash
# Clone repository
git clone https://github.com/rafaumeu/ignite-shop.git
cd ignite-shop

# Install dependencies
pnpm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local with your Stripe keys and app URL

# Start development server
pnpm dev
```

### Environment Variables

Create a `.env.local` file based on `.env.example`:

| Variable              | Description                          | Example                      |
|-----------------------|--------------------------------------|------------------------------|
| `STRIPE_SECRET_KEY`   | Stripe secret API key                | `sk_test_...`                |
| `NEXT_URL`            | App base URL for Stripe redirects    | `http://localhost:3000`      |

---

## 🔧 How It Works

1. **Home Page** — Fetches products from Stripe at build time (ISR every 2h) and renders them in a Keen Slider carousel
2. **Product Page** — Statically generated per product. "Colocar na sacola" button adds items to the React Context cart
3. **Cart Sidebar** — Slide-in drawer showing items with quantity controls. "Finalizar compra" creates a Stripe Checkout Session via the API route
4. **Stripe Checkout** — Handles payment securely on Stripe's hosted page
5. **Success Page** — Server-rendered confirmation pulling order details from the Stripe session

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  🚀 Built with ❤️ during Rocketseat's Ignite Program
</p>
