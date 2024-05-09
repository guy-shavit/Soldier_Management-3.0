import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SoldierService } from '../soldier/soldier.service';

@Injectable()
export class AuthService {
  constructor(
    private soldierService: SoldierService,
    private jwtService: JwtService
  ) {}

  async login(username: string, password: string): Promise<{ access_token: string }> {
    const soldier = await this.soldierService.validateSoldier(username, password);
    if (!soldier) {
      throw new NotFoundException('Invalid credentials');
    }
    const payload = { username: soldier.username, sub: soldier.id, roles: soldier.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}