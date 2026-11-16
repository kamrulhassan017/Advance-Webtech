import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {}

  async create(createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    const newFaculty = this.facultyRepository.create(createFacultyDto);
    return await this.facultyRepository.save(newFaculty);
  }

  async findAll(): Promise<Faculty[]> {
    return await this.facultyRepository.find();
  }

  
  async remove(id: string): Promise<void> {
    const result = await this.facultyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Faculty with ID ${id} not found`);
    }
  }
}