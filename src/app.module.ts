import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelesModule } from './hoteles/hoteles.module';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { ReservasService } from './reservas/reservas.service';
import { ReservasController } from './reservas/reservas.controller';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [HotelesModule, HabitacionesModule, ReservasModule],
  controllers: [AppController, ReservasController],
  providers: [AppService, ReservasService],
})
export class AppModule {}
