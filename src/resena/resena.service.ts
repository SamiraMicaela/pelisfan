import { Injectable } from '@nestjs/common';
import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';

@Injectable()
export class ResenaService {
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
