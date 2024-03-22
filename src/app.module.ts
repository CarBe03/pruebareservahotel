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
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [HotelesModule, HabitacionesModule, ReservasModule, ClientesModule, UsersModule],
  controllers: [AppController, ReservasController, UsersController],
  providers: [AppService, ReservasService, ClientesService],
})
export class AppModule {}
