import mongoose from 'mongoose';
export const ReservasSchema = new mongoose.Schema(
  {
    Fecha_Entrada: { type: Date, required: true },
    Fecha_Salida: { type: Date, required: true },
    habitaciones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'habitaciones' }],
    clientes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'clientes' }],
  },
  {
    timestamps: true,
  },
);