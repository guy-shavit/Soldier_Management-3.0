import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  create(team: Team): Promise<Team> {
    return this.teamRepository.save(team);
  }

  findAll(): Promise<Team[]> {
    return this.teamRepository.find({ relations: ['department', 'teamCommander', 'soldiers'] });
  }

  findOne(id: number): Promise<Team> {
    return this.teamRepository.findOneBy({ id });
  }

  async update(id: number, teamData: Team): Promise<Team> {
    await this.teamRepository.update(id, teamData);
    return this.teamRepository.findOneBy({ id });
  }

  remove(id: number): Promise<void> {
    return this.teamRepository.delete(id).then(() => undefined);
  }
}
