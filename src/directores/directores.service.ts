import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { Repository } from 'typeorm';
import { Director } from './entities/director.entity';

@Injectable()
export class DirectoresService {
  constructor(
    @Inject('DIRECTOR_REPOSITORY')
    private directorReposiroty: Repository<Director>
  ) { }

  async create(createDirectorDto: CreateDirectorDto): Promise<Director> {
    const director = this.directorReposiroty.create(createDirectorDto)
    return this.directorReposiroty.save(director);
  }

  async findAll(): Promise<Director[]> {
    const directores = await this.directorReposiroty.find()
    if (!directores.length) throw new NotFoundException(`This action returns all directores`)
    return directores
  }

  async findOne(id: string): Promise<Director> {
    const director = await this.directorReposiroty.findOne({ where: { id } });
    if (!director) throw new NotFoundException(`El director con ID ${id} no fue encontrado`);
    return director;
  }

  async update(id: string, updateDirectorDto: UpdateDirectorDto): Promise<Director> {
    const director = await this.directorReposiroty.preload({
      id,
      ...updateDirectorDto
    });
    if (!director) {
      throw new NotFoundException(`Director con ID ${id} no encontrado`);
    }
    return this.directorReposiroty.save(director);
  }

  async remove(id: string): Promise<void> {
    const result = await this.directorReposiroty.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Director con ID ${id} no encontrado`);
    }
  }
}
