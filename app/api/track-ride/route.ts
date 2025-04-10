import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  const body = await req.json();
  const { rideId, driverLocation, userLocation } = body;

  const client = await clientPromise;
  const db = client.db('yokrid');

  const result = await db.collection('trackings').updateOne(
    { rideId },
    {
      $set: {
        driverLocation,
        userLocation,
        updatedAt: new Date(),
      },
    },
    { upsert: true }
  );

  return NextResponse.json({ success: true, data: result });
}
