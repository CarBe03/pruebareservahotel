import mongoose from 'mongoose';

export const HotelesSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: String, required: true },
});

HotelesSchema.index({ nombre: 1 });