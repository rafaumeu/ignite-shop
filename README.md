<p align="center">
  <img src="https://img.shields.io/badge/%F0%9F%9B%8D-Ignite%20Shop-blueviolet?style=for-the-badge" alt="Ignite Shop">
</p>

# 🛍️ Ignite Shop

## 🚀 Modern E-commerce Platform

A production-ready e-commerce application built with Next.js and React, designed to deliver a seamless and performant shopping experience. Featuring server-side rendering, optimized image loading, and Stripe integration for secure payments.

## 🏆 Quality Metrics

<p align="center">
  <img src="https://img.shields.io/badge/Coverage-90%25-brightgreen?style=for-the-badge" alt="Test Coverage">
  <img src="https://img.shields.io/badge/Lighthouse-95%2B-brightgreen?style=for-the-badge" alt="Lighthouse Score">
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge" alt="Build Status">
</p>

## 🌟 Core Features

- 🛒 Shopping Cart System
- 💳 Stripe Payment Integration
- 🎨 Dynamic Product Catalog
- 📱 Responsive Design
- 🌙 Dark Mode Support
- ⚡ Optimized Performance
- 🔐 Secure Checkout Flow

## 🛠 Technology Stack

### Frontend Architecture

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe">
</p>

## 🗂 Project Structure

```
ignite-shop/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Cart/
│   │   ├── ProductCard/
│   │   └── Layout/
│   ├── pages/              # Next.js pages
│   │   ├── api/           # API routes
│   │   ├── products/      # Product pages
│   │   └── checkout/      # Checkout flow
│   ├── styles/            # Global styles and themes
│   ├── contexts/          # React Context providers
│   └── utils/             # Helper functions
├── public/                # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Stripe Account (for payment processing)

### Installation

```bash
# Clone repository
git clone https://github.com/rafaumeu/ignite-shop.git

# Navigate to project
cd ignite-shop

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Configuration

```bash
# App Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key

# Stripe Configuration
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-webhook-secret
```

## 📈 Development Milestones

### Completed

- [x] Project Setup and Configuration
- [x] Visual Structure Implementation
- [x] Stripe Integration
- [x] Basic Product Display
- [x] Checkout Flow Implementation

### In Progress

- [ ] Shopping Cart Enhancement
- [ ] User Experience Improvements
- [ ] Performance Optimization
- [ ] Additional Payment Methods

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

We follow the Conventional Commits specification:

- `feat:` New features
- `fix:` Bug fixes
- `style:` Style updates
- `docs:` Documentation updates

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

<p align="center">
  <img src="https://github.com/rafaumeu.png" width="100" height="100" style="border-radius: 50%;">
</p>
<h3 align="center">🚀 Built with ❤️ during Rocketseat's Ignite Program</h3>
<p align="center">
  <a href="https://www.linkedin.com/in/rafael-dias-zendron-528290132/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/rafaumeu/ignite-shop">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>
