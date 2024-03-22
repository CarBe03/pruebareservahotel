import { IClientes } from 'src/clientes/clientes.interface';
import { IHabitacion } from 'src/habitaciones/habitaciones.interface';
export interface IVuelos extends Document {
  Fecha_Entrada: Date;
  Fecha_Salida: Date;
  habitacion: IHabitacion[];
  clientes: IClientes[];
}
