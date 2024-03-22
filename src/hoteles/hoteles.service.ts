import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HOTELES } from 'src/models/models';
import { IHotel } from './hoteles.interface';
import { Model } from 'mongoose';
import { HotelesDTO } from './dto/hoteles.dto';

@Injectable()
export class HotelesService {
  constructor(
    @InjectModel(HOTELES.name) private readonly model: Model<IHotel>,
  ) {}

  async insertar(hotelesDTO: HotelesDTO): Promise<IHotel> {
    const newHotel = new this.model(hotelesDTO);
    return await newHotel.save();
  }
  async todos(): Promise<IHotel[]> {
    return await this.model.find();
  }
  async uno(id: string): Promise<IHotel> {
    return await this.model.findById(id);
  }
  async actualizar(
    id: string,
    hotelesDTO: HotelesDTO,
  ): Promise<IHotel> {
    return await this.model.findByIdAndUpdate(id, hotelesDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Hotelke liminado' };
  }
}
