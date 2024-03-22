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
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.uri_mongo),
    HotelesModule,
    HabitacionesModule,
    ReservasModule,
    ClientesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
