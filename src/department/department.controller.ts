import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from '../entities/department.entity';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  create(@Body() department: Department) {
    return this.departmentService.create(department);
  }

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() department: Department) {
    return this.departmentService.update(+id, department);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentService.remove(+id);
  }
}
