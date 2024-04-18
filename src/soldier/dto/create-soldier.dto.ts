import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
import { Role } from '../../enums/role.enum';

export class CreateSoldierDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEnum(Role)
  role: Role;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsNotEmpty()
  @IsInt()
  teamId: number;
}
