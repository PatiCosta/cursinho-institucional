import Stripe from 'stripe'

const secret = process.env.STRIPE_SECRET_KEY as string

export const stripe = new Stripe(secret, {
    apiVersion: '2023-10-16',
    appInfo: {
        name: 'Site Institucional'
    }
})