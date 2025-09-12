import { loadStripe } from '@stripe/stripe-js';

// Test publishable key for development
const stripePublishableKey = 'pk_test_51Nc7gdSIrGJL2k8vGvL6L8pQ4K4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4';

export const stripePromise = loadStripe(stripePublishableKey);

export const createCheckoutSession = async (items: any[]) => {
  // This would normally be a server-side endpoint
  // For demo purposes, we'll simulate the checkout process
  return {
    sessionId: 'demo_session_' + Date.now(),
    url: '#checkout-demo'
  };
};