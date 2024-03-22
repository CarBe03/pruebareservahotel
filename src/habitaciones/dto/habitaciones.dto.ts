import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HabitacionesDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly numero: string;
}