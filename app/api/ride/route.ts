import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // ✅ correct alias path


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("➡️ Request body:", body);

    const client = await clientPromise;
    console.log("✅ Connected to MongoDB");

    const db = client.db("yokrid");
    const rides = db.collection("rides");

    const result = await rides.insertOne({
      ...body,
      createdAt: new Date(),
    });

    console.log("✅ Ride inserted:", result);

    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    console.error("❌ Ride POST error:", error.message);
    console.error("Stack Trace:", error.stack);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}




export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('yokrid');
    const rides = await db.collection('rides').find().sort({ createdAt: -1 }).toArray();

    return NextResponse.json({ success: true, data: rides });
  } catch (error) {
    console.error("Error fetching rides:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch rides" }, { status: 500 });
  }
}
