import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HABITACIONES } from 'src/models/models';
import { IHabitaciones } from './habitaciones.interface';
import { HabitacionesDTO } from './dto/habitaciones.dto';
@Injectable()
export class HabitacionesService {

    constructor(
        @InjectModel(HABITACIONES.name) private readonly model: Model<IHabitaciones>,
      ) {}
      insertar(habitacionesDTO: HabitacionesDTO): Promise<IHabitaciones> {
        const nuevoHabitaciones = new this.model(habitacionesDTO);
        return nuevoHabitaciones.save();
      }
      todos(): Promise<IHabitaciones[]> {
        return this.model.find().populate('hoteles');
      }
      uno(id: string): Promise<IHabitaciones> {
        return this.model.findById(id).populate('hoteles');
      }
      actualizar(id: string, habitacionesDTO: HabitacionesDTO): Promise<IHabitaciones> {
        return this.model.findByIdAndUpdate(id, habitacionesDTO, { new: true });
      }
      async eliminar(id: string) {
        await this.model.findByIdAndDelete(id);
        return { status: HttpStatus.OK, msg: 'Habitacion Eliminada' };
      }
      async insertarHotel(
        habitacionesId: string,
        hotelesId: string,
      ): Promise<IHabitaciones> {
        return await this.model
          .findByIdAndUpdate(
            habitacionesId,
            { $addToSet: { hoteles: hotelesId } },
            { new: true },
          )
          .populate('hoteles');
      }
    }
