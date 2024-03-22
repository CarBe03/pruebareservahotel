import { Module } from '@nestjs/common';
import { HabitacionesController } from './habitaciones.controller';
import { HabitacionesService } from './habitaciones.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HABITACIONES } from 'src/models/models';
import { HabitacionesSchema } from './schema/habitaciones.schema';
import { HotelesModule } from 'src/hoteles/hoteles.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: HABITACIONES.name,
        useFactory: () => HabitacionesSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    HotelesModule,
  ],
  controllers: [HabitacionesController],
  providers: [HabitacionesService],
  exports: [HabitacionesService],
})
export class HabitacionesModule {}
