import mongoose from 'mongoose';
export const HabitacionesSchema = new mongoose.Schema(
  {
    numero: { type: String, required: true },
    hoteles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'hoteles' }],
  },
  {
    timestamps: true,
  },
);