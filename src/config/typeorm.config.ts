
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'soldier_management',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, 
};
