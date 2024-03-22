import { IHotel } from 'src/hoteles/hoteles.interface';
export interface IHabitaciones extends Document {
  numero: string;
  hoteles: IHotel[];
}
