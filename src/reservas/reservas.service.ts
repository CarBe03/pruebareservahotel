import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RESERVAS } from 'src/models/models';
import { IReservas } from './reservas.interface';
import { Model } from 'mongoose';
import { ReservasDTO } from './dto/reservas.dto';

@Injectable()
export class ReservasService {

    constructor(
        @InjectModel(RESERVAS.name) private readonly model: Model<IReservas>,
      ) {}
      insertar(reservasDTO: ReservasDTO): Promise<IReservas> {
        const nuevaReserva = new this.model(reservasDTO);
        return nuevaReserva.save();
      }
      todos(): Promise<IReservas[]> {
        return this.model.find();
      }
      uno(id: string): Promise<IReservas> {
        return this.model.findById(id);
      }
      actualizar(id: string, reservasDTO: ReservasDTO): Promise<IReservas> {
        return this.model.findByIdAndUpdate(id, reservasDTO, { new: true });
      }
      async eliminar(id: string) {
        await this.model.findByIdAndDelete(id);
        return { status: HttpStatus.OK, msg: 'Reserva Eliminada' };
      }
      async insertarHabitacion(
        reservasId: string,
        habitacionesId: string,
      ): Promise<IReservas> {
        return await this.model
          .findByIdAndUpdate(
            reservasId,
            { $addToSet: { habitaciones: habitacionesId } },
            { new: true },
          )
          .populate('habitaciones');
      }
      async insertarCliente(
        reservasId: string,
        clientesId: string,
      ): Promise<IReservas> {
        return await this.model
          .findByIdAndUpdate(
            reservasId,
            { $addToSet: { clientes: clientesId } },
            { new: true },
          )
          .populate('clientes');
      }
    }
