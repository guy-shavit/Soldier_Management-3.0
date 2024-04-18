import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  create(department: Department): Promise<Department> {
    return this.departmentRepository.save(department);
  }

  findAll(): Promise<Department[]> {
    return this.departmentRepository.find({ relations: ['departmentCommander', 'teams'] });
  }

  findOne(id: number): Promise<Department> {
    return this.departmentRepository.findOneBy({ id });
  }

  async update(id: number, departmentData: Department): Promise<Department> {
    await this.departmentRepository.update(id, departmentData);
    return this.departmentRepository.findOneBy({ id });
  }

  remove(id: number): Promise<void> {
    return this.departmentRepository.delete(id).then(() => undefined);
  }
}
