import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature, handleWebhookEvent } from "@/lib/polar";

/**
 * Polar.sh Webhook Handler
 * 
 * This endpoint receives webhook events from Polar.sh for:
 * - Subscription lifecycle events (created, updated, cancelled)
 * - Payment events (successful, failed)
 * 
 * Make sure to configure this URL in your Polar.sh dashboard:
 * https://your-domain.com/api/webhooks/polar
 */
export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const signature = request.headers.get("polar-signature") || "";
    
    // Verify the webhook signature
    if (!verifyWebhookSignature(payload, signature)) {
      console.error("Invalid webhook signature");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }
    
    // Parse the webhook payload
    const event = JSON.parse(payload);
    const { type, data } = event;
    
    console.log(`Received Polar webhook: ${type}`);
    
    // Handle the webhook event
    await handleWebhookEvent(type, data);
    
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

// Polar.sh requires this endpoint to respond to GET requests for verification
export async function GET() {
  return NextResponse.json({ status: "Polar webhook endpoint is active" });
}
