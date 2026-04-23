import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { socialMediaServices, businessServices } from '@/lib/services';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, slug } = await req.json();

    const allServices = [...socialMediaServices, ...businessServices];
    const service = allServices.find(s => s.slug === slug);

    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      locale: 'pl',
      payment_method_types: ['card', 'blik', 'p24'],
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'pln',
            unit_amount: service.amount,
            product_data: {
              name: service.title,
              description: `${service.shortDescription} — ${firstName} ${lastName}`,
            },
          },
        },
      ],
      metadata: { firstName, lastName, email, slug },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?service=${slug}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
