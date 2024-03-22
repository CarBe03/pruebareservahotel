import { Module } from '@nestjs/common';
import { HotelesController } from './hoteles.controller';
import { HotelesService } from './hoteles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HOTELES } from 'src/models/models';
import { HotelesSchema } from './schema/hoteles.schema';


@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: HOTELES.name,
        useFactory: () => HotelesSchema,
      },
    ]),
  ],
  controllers: [HotelesController],
  providers: [HotelesService],
  exports: [HotelesService],
})
export class HotelesModule {}
