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

  async findAll(): Promise<Genero[]> {
    const genero = await this.generoRepository.find(/*{relations:[""]}*/)
    if (!genero.length) throw new NotFoundException(`This action returns all genero`)
    return genero
  }

  async findOne(id: string): Promise<Genero> {
    const genero = await this.generoRepository.findOne({ where: { id } });
    if (!genero) throw new NotFoundException(`El género con ID ${id} no fue encontrado`);
    return genero;
  }

  async update(id: string, updateGeneroDto: UpdateGeneroDto): Promise<Genero> {
    const genero = await this.generoRepository.preload({
      id,
      ...updateGeneroDto
    });
    if (!genero) {
      throw new NotFoundException(`Genero con ID ${id} no encontrado`);
    }
    return this.generoRepository.save(genero);
  }

  async remove(id: string): Promise<void> {
    const result = await this.generoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Genero con ID ${id} no encontrado`);
    }
  }
}
