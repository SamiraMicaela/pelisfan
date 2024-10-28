import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Genero } from './entities/genero.entity';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Repository } from 'typeorm';

@Injectable()
export class GeneroService {
  constructor(
    @Inject('GENERO_REPOSITORY')
    private generoRepository: Repository<Genero>
  ) { }

  async create(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    const genero = this.generoRepository.create(createGeneroDto)
    return this.generoRepository.save(genero);
  }

  async findAll():Promise<Genero[]> {
    const genero= await this.generoRepository.find(/*{relations:[""]}*/) 
    if(!genero.length)throw new NotFoundException(`This action returns all genero`)
     return genero
    }

  findOne(id: number) {
    return `This action returns a #${id} genero`;
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return `This action updates a #${id} genero`;
  }

  remove(id: number) {
    return `This action removes a #${id} genero`;
  }
}
