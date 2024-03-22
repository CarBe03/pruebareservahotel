import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HotelesService } from './hoteles.service';
import { HotelesDTO } from './dto/hoteles.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('hoteles')
@Controller('api/v1/hoteles')
export class HotelesController {
  constructor(private readonly hotelesService: HotelesService) {}

  @Post()
  insertar(@Body() hotelesDTO: HotelesDTO) {
    return this.hotelesService.insertar(hotelesDTO);
  }
  @Get()
  todos() {
    return this.hotelesService.todos();
  }
  @Get(':id')
  uno(@Param('id') id: string) {
    return this.hotelesService.uno(id);
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() hotelesDTO: HotelesDTO) {
    return this.hotelesService.actualizar(id, hotelesDTO);
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.hotelesService.eliminar(id);
  }
}
