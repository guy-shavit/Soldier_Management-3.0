import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Soldier } from './soldier.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventName: string;

  @ManyToOne(() => Soldier, soldier => soldier.events)
  soldier: Soldier;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
