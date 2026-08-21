// ============================================================================
// STRIPE PAYMENTS — production service
// Real Stripe integration. Requires STRIPE_SECRET_KEY env to go live.
// In dev/demo (no key) it returns a mock success so the flow can be tested.
// PCI: card data NEVER touches our server — Stripe Elements / PaymentIntent only.
// ============================================================================

let _stripe: any = null;
const SECRET_KEY = process.env.STRIPE_SECRET_KEY;

function client() {
  if (!_stripe && SECRET_KEY) {
    // Lazy-import the official SDK so the app can boot without it installed.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    _stripe = new (require("stripe"))(SECRET_KEY, { apiVersion: "2024-06-20" });
  }
  return _stripe;
}

export const paymentsEnabled = () => !!SECRET_KEY;

/** Create a Stripe customer (returns a mock id if disabled). */
export async function createCustomer({ email, fullName }: { email?: string; fullName?: string }) {
  if (!paymentsEnabled()) return { id: "cus_demo_" + Date.now(), demo: true };
  const stripe = client();
  const customer = await stripe.customers.create({ email, name: fullName });
  return { id: customer.id };
}

/** Create a one-time PaymentIntent for an order total. */
export async function createPaymentIntent({
  amountCents,
  currency = "cad",
  customerId,
  metadata,
}: {
  amountCents: number;
  currency?: string;
  customerId?: string;
  metadata?: Record<string, string>;
}) {
  if (!paymentsEnabled()) return { clientSecret: "demo_cs_" + Date.now(), id: "pi_demo_" + Date.now(), demo: true };
  const stripe = client();
  const pi = await stripe.paymentIntents.create({
    amount: amountCents,
    currency,
    customer: customerId,
    metadata,
    automatic_payment_methods: { enabled: true },
  });
  return { clientSecret: pi.client_secret, id: pi.id };
}

/** Confirm a payment intent (used when the client sends back a confirmation). */
export async function confirmPaymentIntent(id: string) {
  if (!paymentsEnabled()) return { id, status: "succeeded", demo: true };
  const stripe = client();
  const pi = await stripe.paymentIntents.confirm(id);
  return { id: pi.id, status: pi.status };
}

/** Create a subscription (weekly plan). */
export async function createSubscription({
  customerId,
  priceId,
  metadata,
}: {
  customerId: string;
  priceId: string;
  metadata?: Record<string, string>;
}) {
  if (!paymentsEnabled()) return { id: "sub_demo_" + Date.now(), demo: true };
  const stripe = client();
  const sub = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    metadata,
    payment_behavior: "default_incomplete",
  });
  return { id: sub.id };
}

/**
 * Verify a Stripe webhook signature.
 * REQUIRED in production — never trust webhooks without this.
 */
export async function verifyWebhook(rawBody: string | Buffer, sig: string, endpointSecret: string) {
  if (!paymentsEnabled()) return { demo: true, type: "payment_intent.succeeded" };
  const stripe = client();
  return stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
}

/** Refund a payment (used when a Sliding Scale threshold is not met). */
export async function refund(paymentIntentId: string, amountCents?: number) {
  if (!paymentsEnabled()) return { id: "re_demo_" + Date.now(), status: "succeeded", demo: true };
  const stripe = client();
  const refund = await stripe.refunds.create({ payment_intent: paymentIntentId, ...(amountCents ? { amount: amountCents } : {}) });
  return { id: refund.id, status: refund.status };
}
