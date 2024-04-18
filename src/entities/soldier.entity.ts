import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Team } from './team.entity';
import { Event } from './event.entity';
import { Role } from '../enums/role.enum';

@Entity()
export class Soldier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Soldier
  })
  role: Role;

  @ManyToOne(() => Team, team => team.soldiers)
  team: Team;

  @OneToMany(() => Event, event => event.soldier)
  events: Event[];

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string;

}
