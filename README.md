# Ignite Shop

<p align="center">
  <img src="https://img.shields.io/badge/%F0%9F%9B%8D-Ignite%20Shop-blueviolet?style=for-the-badge" alt="Ignite Shop">
</p>

## 🛍️ Overview

Ignite Shop is a modern e-commerce platform developed as part of the Rocketseat Ignite Program. This application is built with **Next.js** and **React**, delivering a seamless shopping experience while implementing modern web development practices and server-side rendering capabilities.

---

## 🎯 Project Motivation

Ignite Shop is designed to:

- 🧠 Master advanced concepts in Next.js, including Static Site Generation (SSG) and Server-Side Rendering (SSR)
- 💡 Implement best practices in React development with TypeScript
- 🔧 Build a scalable, production-ready e-commerce solution integrated with Stripe
- 📊 Explore state management and complex UI interactions with modern tools

---

## 🌟 Current Features

- 🎨 Dynamic Product Catalog with Keen Slider integration
- 🖼️ Optimized image loading with Next.js Image component
- 💳 Stripe Integration for product management
- 📱 Responsive Design with Stitches
- 🎯 Incremental Static Regeneration (ISR) for product pages
- 💰 Currency formatting and price display optimization

---

## 🛠️ Technology Stack

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Stitches-000000?style=for-the-badge&logo=css3&logoColor=white" alt="Stitches">
  <img src="https://img.shields.io/badge/Keen%20Slider-FF6B6B?style=for-the-badge" alt="Keen Slider">
  <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe">
</p>

---

## 📂 Project Structure

```plaintext
ignite-shop/
├── src/
│   ├── assets/            # Static assets (images, logos)
│   ├── components/        # Reusable UI components
│   ├── pages/             # Next.js pages
│   │   ├── _app.tsx       # Global app configuration
│   │   ├── _document.tsx  # Custom document configuration
│   │   ├── index.tsx      # Home page with product listing
│   │   ├── product/       # Product pages with SSG
│   │   └── success.tsx    # Checkout success page
│   ├── styles/            # Global styles and themes
│   └── utils/            # Helper functions
├── public/                # Public assets
└── package.json          # Project metadata and dependencies
```

---

## 📈 Development Progress

### Completed Features

- [x] Project Setup and Configuration
  - [x] File System Routing Setup
  - [x] Custom Document Configuration
  - [x] Font Integration
  - [x] Styling with Stitches
- [x] Visual Structure Implementation
  - [x] Global Layout
  - [x] Home Page Design
  - [x] Product Listing Layout
  - [x] Product Carousel with Keen Slider
- [x] Stripe Integration
  - [x] Product Registration
  - [x] Image Domain Configuration
  - [x] Server-side Product Fetching
  - [x] Static Generation
    - [x] ISR Implementation
    - [x] Currency Formatting
    - [x] Product Page Optimization
- [ ] Product & Checkout

### Next Steps

- [ ] Shopping Cart Implementation
- [ ] Checkout Flow Integration
- [ ] Success Page Development
- [ ] User Authentication
- [ ] Order History

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Stripe Account for API integration

### Installation

```bash
# Clone repository
git clone https://github.com/rafaumeu/ignite-shop.git

# Navigate to project
cd ignite-shop

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Add your Stripe API keys to .env.local

# Start development server
npm run dev
```

---

## 👥 Contributing

Contributions are welcome! If you'd like to improve Ignite Shop, feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

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
