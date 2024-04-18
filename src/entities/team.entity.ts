import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Department } from './department.entity';
import { Soldier } from './soldier.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  number: number;

  @ManyToOne(() => Department, department => department.teams)
  department: Department;

  @ManyToOne(() => Soldier)
  @JoinColumn()
  teamCommander: Soldier;

  @OneToMany(() => Soldier, soldier => soldier.team)
  soldiers: Soldier[];
}
