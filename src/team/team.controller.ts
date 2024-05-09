import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from '../entities/team.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DepartmentCommander')
  @Post()
  create(@Body() team: Team) {
    return this.teamService.create(team);
  }

  @UseGuards(JwtAuthGuard)
  @Roles('Soldier', 'TeamCommander', 'DepartmentCommander')
  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Roles('Soldier', 'TeamCommander', 'DepartmentCommander')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DepartmentCommander')
  @Put(':id')
  update(@Param('id') id: string, @Body() team: Team) {
    return this.teamService.update(+id, team);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DepartmentCommander')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
