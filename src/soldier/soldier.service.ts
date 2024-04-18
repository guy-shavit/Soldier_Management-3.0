import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Soldier } from '../entities/soldier.entity';

@Injectable()
export class SoldierService {
  constructor(
    @InjectRepository(Soldier)
    private soldierRepository: Repository<Soldier>,
  ) {}

  create(soldier: Soldier): Promise<Soldier> {
    return this.soldierRepository.save(soldier);
  }

  findAll(): Promise<Soldier[]> {
    return this.soldierRepository.find();
  }

  findOne(id: number): Promise<Soldier> {
    return this.soldierRepository.findOneBy({ id });
  }

  async update(id: number, updateSoldierDto: Soldier): Promise<Soldier> {
    await this.soldierRepository.update(id, updateSoldierDto);
    return this.soldierRepository.findOneBy({ id });
  }

  remove(id: number): Promise<void> {
    return this.soldierRepository.delete(id).then(() => undefined);
  }
}
