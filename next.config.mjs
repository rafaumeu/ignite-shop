/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [ {
      protocol: 'https',
      hostname: 'files.stripe.com', // Domínio do Stripe
      port: '',
      pathname: '/links/**', // Se necessário, ajuste o caminho
    },],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
