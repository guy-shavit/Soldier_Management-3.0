import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { SoldierService } from './soldier.service';
import { Soldier } from '../entities/soldier.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('soldiers')
export class SoldierController {
  constructor(private readonly soldierService: SoldierService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DepartmentCommander', 'TeamCommander')
  @Post()
  create(@Body() soldier: Soldier) {
    return this.soldierService.create(soldier);
  }

  @UseGuards(JwtAuthGuard)
  @Roles('Soldier', 'TeamCommander', 'DepartmentCommander')
  @Get()
  findAll() {
    return this.soldierService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Roles('Soldier', 'TeamCommander', 'DepartmentCommander')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldierService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DepartmentCommander', 'TeamCommander')
  @Put(':id')
  update(@Param('id') id: string, @Body() soldier: Soldier) {
    return this.soldierService.update(+id, soldier);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DepartmentCommander', 'TeamCommander')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldierService.remove(+id);
  }
}
