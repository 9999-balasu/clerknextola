import mongoose, { Document, Schema, model, models } from 'mongoose';

export interface RideDocument extends Document {
  pickup: string;
  drop: string;
  vehicle: string;
  amount: number;
  paymentId: string;
}

const RideSchema = new Schema<RideDocument>(
  {
    pickup: { type: String, required: true },
    drop: { type: String, required: true },
    vehicle: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Ride = models.Ride || model<RideDocument>('Ride', RideSchema);
