import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { UpdateOrderDto } from '../../domain/ports/in/update-order.use-case';

export class UpdateOrderNestDto implements UpdateOrderDto {
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsOptional()
  description: string;
}