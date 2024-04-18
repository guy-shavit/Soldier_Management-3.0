import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Soldier } from './soldier.entity';
import { Team } from './team.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  number: number;

  @OneToOne(() => Soldier)
  @JoinColumn()
  departmentCommander: Soldier;

  @OneToMany(() => Team, team => team.department)
  teams: Team[];
}
