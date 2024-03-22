import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HabitacionesService } from 'src/habitaciones/habitaciones.service';
import { ClientesService } from 'src/clientes/clientes.service';
import { ReservasDTO } from './dto/reservas.dto';

@ApiTags('reservas')
@Controller('api/v1/reservas')
export class ReservasController {
  constructor(
    private readonly reservasService: ReservasService,
    private readonly habitacionesService: HabitacionesService,
    private readonly clientesService: ClientesService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Ingresar una Reserva' })
  insertar(@Body() reservasDTO: ReservasDTO) {
    return this.reservasService.insertar(reservasDTO);
  }
  @Get()
  @ApiOperation({ summary: 'Cargar todas las Reservas' })
  todos() {
    return this.reservasService.todos();
  }
  @Get(':id')
  uno(@Param('id') id: string) {
    return this.reservasService.uno(id);
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() reservasDTO: ReservasDTO) {
    return this.reservasService.actualizar(id, reservasDTO);
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.reservasService.eliminar(id);
  }
  @Post(':reservasId/habitaciones/:habitacionesId')
  async agregarHabitaciones(
    @Param('reservasId') reservasId: string,
    @Param('habitacionesId') habitacionesId: string,
  ) {
    const habitaciones = await this.habitacionesService.uno(habitacionesId);
    if (!habitaciones)
      throw new HttpException('Habitaciones no encontradas', HttpStatus.NOT_FOUND);
    return this.reservasService.insertarHabitacion(reservasId, habitacionesId);
  }
  @Post(':pedidosId/clientes/:clientesId')
  async agregarClientes(
    @Param('pedidosId') pedidosId: string,
    @Param('clientesId') clientesId: string,
  ) {
    const clientes = await this.clientesService.uno(clientesId);
    if (!clientes)
      throw new HttpException('Clientes not found', HttpStatus.NOT_FOUND);
    return this.reservasService.insertarCliente(pedidosId, clientesId);
  }
}
