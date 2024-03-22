import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelesModule } from './hoteles/hoteles.module';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { ReservasService } from './reservas/reservas.service';
import { ReservasController } from './reservas/reservas.controller';
import { ReservasModule } from './reservas/reservas.module';
import { ClientesService } from './clientes/clientes.service';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [HotelesModule, HabitacionesModule, ReservasModule, ClientesModule],
  controllers: [AppController, ReservasController],
  providers: [AppService, ReservasService, ClientesService],
})
export class AppModule {}
