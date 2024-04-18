import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from '../entities/event.entity';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() event: Event) {
    return this.eventService.create(event);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() event: Event) {
    return this.eventService.update(+id, event);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
