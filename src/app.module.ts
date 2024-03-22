import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelesModule } from './hoteles/hoteles.module';
import { HabitacionesModule } from './habitaciones/habitaciones.module';

@Module({
  imports: [HotelesModule, HabitacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
