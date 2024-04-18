import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SoldierService } from './soldier.service';
import { Soldier } from '../entities/soldier.entity';

@Controller('soldiers')
export class SoldierController {
  constructor(private readonly soldierService: SoldierService) {}

  @Post()
  create(@Body() soldier: Soldier) {
    return this.soldierService.create(soldier);
  }

  @Get()
  findAll() {
    return this.soldierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldierService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() soldier: Soldier) {
    return this.soldierService.update(+id, soldier);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldierService.remove(+id);
  }
}
