import { IHotel } from 'src/hoteles/hoteles.interface';
export interface IHabitacion extends Document {
  numero: string;
  hotel: IHotel[];
}
