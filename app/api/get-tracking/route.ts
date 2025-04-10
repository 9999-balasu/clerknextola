// /app/api/get-tracking/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const rideId = url.searchParams.get('rideId');

  const client = await clientPromise;
  const db = client.db('yokrid');

  const tracking = await db.collection('trackings').findOne({ rideId });

  return NextResponse.json(tracking);
}
