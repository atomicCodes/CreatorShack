/**
 * Polar.sh Integration
 * 
 * This file contains the scaffolding for Polar.sh payment integration.
 * Replace the placeholder values with your actual Polar.sh credentials.
 * 
 * Documentation: https://docs.polar.sh
 */

// Polar.sh Configuration
export const polarConfig = {
  // TODO: Replace with your actual Polar.sh organization ID
  organizationId: process.env.POLAR_ORGANIZATION_ID || "your-organization-id",
  
  // TODO: Replace with your actual API key (keep this secret!)
  apiKey: process.env.POLAR_API_KEY || "",
  
  // Product IDs for each tier
  // TODO: Create these products in your Polar.sh dashboard and add their IDs here
  products: {
    free: {
      id: process.env.POLAR_FREE_PRODUCT_ID || "free-tier-product-id",
      name: "Free",
      priceMonthly: 0,
      priceYearly: 0,
    },
    pro: {
      id: process.env.POLAR_PRO_PRODUCT_ID || "pro-tier-product-id",
      name: "Pro",
      priceMonthly: 1900, // in cents
      priceYearly: 18000, // in cents (yearly total)
    },
    team: {
      id: process.env.POLAR_TEAM_PRODUCT_ID || "team-tier-product-id",
      name: "Team",
      priceMonthly: 4900, // in cents
      priceYearly: 46800, // in cents (yearly total)
    },
  },
  
  // Webhook configuration
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET || "",
  
  // URLs
  successUrl: process.env.NEXT_PUBLIC_APP_URL 
    ? `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success`
    : "http://localhost:3000/dashboard?checkout=success",
  cancelUrl: process.env.NEXT_PUBLIC_APP_URL
    ? `${process.env.NEXT_PUBLIC_APP_URL}/pricing?checkout=cancelled`
    : "http://localhost:3000/pricing?checkout=cancelled",
};

// Types
export interface PolarCustomer {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
}

export interface PolarSubscription {
  id: string;
  customerId: string;
  productId: string;
  status: "active" | "cancelled" | "past_due" | "incomplete";
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
}

export interface PolarCheckoutSession {
  id: string;
  url: string;
  expiresAt: Date;
}

/**
 * Create a checkout session for a subscription
 * 
 * @param productId - The Polar.sh product ID
 * @param customerId - Optional existing customer ID
 * @param customerEmail - Customer email for new customers
 * @returns Checkout session with redirect URL
 */
export async function createCheckoutSession(
  productId: string,
  customerId?: string,
  customerEmail?: string
): Promise<PolarCheckoutSession> {
  // TODO: Implement actual Polar.sh API call
  // Example implementation:
  // 
  // const response = await fetch("https://api.polar.sh/v1/checkouts", {
  //   method: "POST",
  //   headers: {
  //     "Authorization": `Bearer ${polarConfig.apiKey}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     product_id: productId,
  //     customer_id: customerId,
  //     customer_email: customerEmail,
  //     success_url: polarConfig.successUrl,
  //     cancel_url: polarConfig.cancelUrl,
  //   }),
  // });
  // 
  // if (!response.ok) {
  //   throw new Error("Failed to create checkout session");
  // }
  // 
  // return response.json();
  
  console.log("Creating checkout session for product:", productId);
  
  // Placeholder return
  return {
    id: "checkout_placeholder",
    url: polarConfig.successUrl,
    expiresAt: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
  };
}

/**
 * Get a customer's subscription
 * 
 * @param customerId - The Polar.sh customer ID
 * @returns The customer's active subscription or null
 */
export async function getCustomerSubscription(
  customerId: string
): Promise<PolarSubscription | null> {
  // TODO: Implement actual Polar.sh API call
  // Example implementation:
  // 
  // const response = await fetch(
  //   `https://api.polar.sh/v1/subscriptions?customer_id=${customerId}`,
  //   {
  //     headers: {
  //       "Authorization": `Bearer ${polarConfig.apiKey}`,
  //     },
  //   }
  // );
  // 
  // if (!response.ok) {
  //   throw new Error("Failed to fetch subscription");
  // }
  // 
  // const data = await response.json();
  // return data.items[0] || null;
  
  console.log("Fetching subscription for customer:", customerId);
  
  // Placeholder return
  return null;
}

/**
 * Cancel a subscription
 * 
 * @param subscriptionId - The subscription ID to cancel
 * @param immediate - Whether to cancel immediately or at period end
 */
export async function cancelSubscription(
  subscriptionId: string,
  immediate: boolean = false
): Promise<void> {
  // TODO: Implement actual Polar.sh API call
  // Example implementation:
  // 
  // const response = await fetch(
  //   `https://api.polar.sh/v1/subscriptions/${subscriptionId}/cancel`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Authorization": `Bearer ${polarConfig.apiKey}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       immediate,
  //     }),
  //   }
  // );
  // 
  // if (!response.ok) {
  //   throw new Error("Failed to cancel subscription");
  // }
  
  console.log("Cancelling subscription:", subscriptionId, { immediate });
}

/**
 * Get the customer portal URL
 * 
 * @param customerId - The customer ID
 * @returns URL to redirect the customer to manage their subscription
 */
export async function getCustomerPortalUrl(
  customerId: string
): Promise<string> {
  // TODO: Implement actual Polar.sh API call
  // Example implementation:
  // 
  // const response = await fetch(
  //   `https://api.polar.sh/v1/customers/${customerId}/portal`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Authorization": `Bearer ${polarConfig.apiKey}`,
  //     },
  //   }
  // );
  // 
  // if (!response.ok) {
  //   throw new Error("Failed to create portal session");
  // }
  // 
  // const data = await response.json();
  // return data.url;
  
  console.log("Getting portal URL for customer:", customerId);
  
  // Placeholder return
  return "/dashboard/billing";
}

/**
 * Verify a webhook signature
 * 
 * @param payload - The raw webhook payload
 * @param signature - The signature from the webhook headers
 * @returns Whether the signature is valid
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string
): boolean {
  // TODO: Implement actual signature verification
  // This is typically done using crypto.createHmac with the webhook secret
  // 
  // const hmac = crypto.createHmac("sha256", polarConfig.webhookSecret);
  // const digest = hmac.update(payload).digest("hex");
  // return crypto.timingSafeEqual(
  //   Buffer.from(signature),
  //   Buffer.from(digest)
  // );
  
  console.log("Verifying webhook signature");
  return true;
}

/**
 * Handle different webhook event types
 * 
 * @param eventType - The type of webhook event
 * @param data - The webhook payload data
 */
export async function handleWebhookEvent(
  eventType: string,
  data: Record<string, unknown>
): Promise<void> {
  switch (eventType) {
    case "subscription.created":
      // Handle new subscription
      console.log("New subscription created:", data);
      break;
      
    case "subscription.updated":
      // Handle subscription update (e.g., plan change)
      console.log("Subscription updated:", data);
      break;
      
    case "subscription.cancelled":
      // Handle subscription cancellation
      console.log("Subscription cancelled:", data);
      break;
      
    case "invoice.paid":
      // Handle successful payment
      console.log("Invoice paid:", data);
      break;
      
    case "invoice.payment_failed":
      // Handle failed payment
      console.log("Payment failed:", data);
      break;
      
    default:
      console.log("Unhandled webhook event:", eventType);
  }
}
