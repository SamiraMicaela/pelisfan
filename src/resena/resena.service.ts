import { Inject, Injectable } from '@nestjs/common';
import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { Repository } from 'typeorm';
import { Resena } from './entities/resena.entity';

@Injectable()
export class ResenaService {
  constructor(
    @Inject('RESENA_REPOSITORY')
    private resenaRepository: Repository<Resena>
  ){}
  create(createResenaDto: CreateResenaDto) {
    return 'This action adds a new resena';
  }

  findAll() {
    return `This action returns all resena`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resena`;
  }

  update(id: number, updateResenaDto: UpdateResenaDto) {
    return `This action updates a #${id} resena`;
  }

  remove(id: number) {
    return `This action removes a #${id} resena`;
  }
}
