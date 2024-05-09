import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Soldier } from '../entities/soldier.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SoldierService {
  constructor(
    @InjectRepository(Soldier)
    private soldierRepository: Repository<Soldier>,
  ) {}

  async create(soldierData: { password: string; [key: string]: any }): Promise<Soldier> {
    const hashedPassword = await bcrypt.hash(soldierData.password, 10);
    const soldier = this.soldierRepository.create({ ...soldierData, password: hashedPassword });
    return this.soldierRepository.save(soldier);
  }

  findAll(): Promise<Soldier[]> {
    return this.soldierRepository.find();
  }

  findOne(id: number): Promise<Soldier> {
    return this.soldierRepository.findOneBy({ id });
  }

  findOneByUsername(username: string): Promise<Soldier> {
    return this.soldierRepository.findOneBy({ username });
  }

  async update(id: number, updateSoldierDto: Soldier): Promise<Soldier> {
    if (updateSoldierDto.password) {
      updateSoldierDto.password = await bcrypt.hash(updateSoldierDto.password, 10);
    }
    await this.soldierRepository.update(id, updateSoldierDto);
    return this.soldierRepository.findOneBy({ id });
  }

  remove(id: number): Promise<void> {
    return this.soldierRepository.delete(id).then(() => undefined);
  }

  async validateSoldier(username: string, pass: string): Promise<any> {
    const soldier = await this.findOneByUsername(username);
    if (soldier && await bcrypt.compare(pass, soldier.password)) {
      const { password, ...result } = soldier;
      return result;
    }
    return null;
  }
}
