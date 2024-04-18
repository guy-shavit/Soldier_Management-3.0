import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  create(event: Event): Promise<Event> {
    return this.eventRepository.save(event);
  }

  findAll(): Promise<Event[]> {
    return this.eventRepository.find({ relations: ['soldier'] });
  }

  findOne(id: number): Promise<Event> {
    return this.eventRepository.findOneBy({ id });
  }

  async update(id: number, eventData: Event): Promise<Event> {
    await this.eventRepository.update(id, eventData);
    return this.eventRepository.findOneBy({ id });
  }

  remove(id: number): Promise<void> {
    return this.eventRepository.delete(id).then(() => undefined);
  }
}
