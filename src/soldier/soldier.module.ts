import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Soldier } from '../entities/soldier.entity';
import { SoldierService } from './soldier.service';
import { SoldierController } from './soldier.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Soldier])],
  providers: [SoldierService],
  controllers: [SoldierController],
  exports: [SoldierService]  
})
export class SoldierModule {}
