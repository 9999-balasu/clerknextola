// app/api/razorpay/route.ts
/*import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

export async function POST() {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount: 50000, // ₹500 in paise
    currency: 'INR',
    receipt: 'receipt_order_74394',
  };

  try {
    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 });
  }
}
*/





/*import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { amount } = body;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount, // amount from frontend in paise
    currency: 'INR',
    receipt: `receipt_order_${Math.floor(Math.random() * 1000000)}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    console.error('❌ Razorpay Order Creation Failed:', error);
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 });
  }
}
*/





import Razorpay from 'razorpay'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { amount } = body

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json({ error: 'Missing Razorpay credentials' }, { status: 500 })
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  })

  const options = {
    amount,
    currency: 'INR',
    receipt: `receipt_order_${Math.floor(Math.random() * 1000000)}`,
  }

  try {
    const order = await razorpay.orders.create(options)
    console.log('✅ Razorpay Order Created:', order)
    return NextResponse.json(order)
  } catch (error: any) {
    console.error('❌ Razorpay Order Creation Failed:', error?.message || error)
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 })
  }
}
