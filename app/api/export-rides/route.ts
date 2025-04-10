import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';


import { Parser } from 'json2csv';


export async function GET() {
  const client = await clientPromise;
  const db = client.db('yokrid');
  const rides = await db.collection('rides').find().toArray();

  const fields = ['pickup', 'drop', 'vehicle', 'amount', 'paymentId', 'createdAt'];
  const parser = new Parser({ fields });
  const csv = parser.parse(rides);

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename=ride_history.csv',
    },
  });
}
