import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RESERVAS } from 'src/models/models';
import { ReservasSchema } from './schema/reservas.schema';
import { ClientesModule } from 'src/clientes/clientes.module';
import { HabitacionesModule } from 'src/habitaciones/habitaciones.module';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
          {
            name: RESERVAS.name,
            useFactory: () => ReservasSchema.plugin(require('mongoose-autopopulate')),
          },
        ]),
        HabitacionesModule,
        ClientesModule,
      ],
      controllers: [ReservasController],
      providers: [ReservasService],
})
export class ReservasModule {}
