import { IClientes } from 'src/clientes/clientes.interface';
import { IHabitaciones } from 'src/habitaciones/habitaciones.interface';
export interface IReservas extends Document {
  Fecha_Entrada: Date;
  Fecha_Salida: Date;
  habitaciones: IHabitaciones[];
  clientes: IClientes[];
}
