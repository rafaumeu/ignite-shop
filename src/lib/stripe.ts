import Stripe from 'stripe'

// Fallback to dummy key for build time when env var is not set
const secretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_build_only_dummy_key_for_build'

export const stripe = new Stripe(secretKey, {
  apiVersion: '2024-12-18.acacia',
  appInfo: {
    name: 'Ignite Shop',
  },
})
