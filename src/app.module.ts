import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelesModule } from './hoteles/hoteles.module';

@Module({
  imports: [HotelesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
