import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from '../entities/team.entity';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() team: Team) {
    return this.teamService.create(team);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() team: Team) {
    return this.teamService.update(+id, team);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
