// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { SoldierModule } from './soldier/soldier.module';
import { DepartmentModule } from './department/department.module';
import { TeamModule } from './team/team.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    SoldierModule,
    DepartmentModule,
    TeamModule,
    EventModule,
  ],
})
export class AppModule {}
