import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  number: number;

  @IsNotEmpty()
  @IsNumber()
  departmentId: number;

  @IsNotEmpty()
  @IsNumber()
  teamCommanderId: number;
}
