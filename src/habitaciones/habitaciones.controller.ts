import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HabitacionesService } from './habitaciones.service';
import { HotelesService } from 'src/hoteles/hoteles.service';
import { HabitacionesDTO } from './dto/habitaciones.dto';

  @ApiTags('habitaciones')

@Controller('api/v1/habitaciones')
export class HabitacionesController {
    constructor(
        private readonly habitacionesService: HabitacionesService,
        private readonly hotelesService: HotelesService,
      ) {}
      @Post()
      @ApiOperation({ summary: 'Crear Habitacion' })
      insertar(@Body() habitacionesDTO: HabitacionesDTO) {
        return this.habitacionesService.insertar(habitacionesDTO);
      }
      @Get()
      @ApiOperation({ summary: 'Selecciona todos las Habitaciones' })
      todos() {
        return this.habitacionesService.todos();
      }
      @Get(':id')
      uno(@Param('id') id: string) {
        return this.habitacionesService.uno(id);
      }
      @Put(':id')
      actualizar(@Param('id') id: string, @Body() habitacionesDTO: HabitacionesDTO) {
        return this.habitacionesService.actualizar(id, habitacionesDTO);
      }
      @Delete(':id')
      eliminar(@Param('id') id: string) {
        return this.habitacionesService.eliminar(id);
      }
      @Post(':habitacionesId/hoteles/:hotelesId')
      async agregarHoteles(
        @Param('habitacionesId') habitacionesId: string,
        @Param('hotelesId') hotelesId: string,
      ) {
        const hoteles = await this.hotelesService.uno(hotelesId);
        if (!hoteles)
          throw new HttpException('Hoteles not found', HttpStatus.NOT_FOUND);
        return this.habitacionesService.insertarHotel(habitacionesId, hotelesId);
      }
    }
