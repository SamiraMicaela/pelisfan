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

  async create(createDirectorDto: CreateDirectorDto) : Promise<Director>{
    const director= this.directorReposiroty.create(createDirectorDto)
    return this.directorReposiroty.save(director);
  }

  async findAll():Promise<Director[]> {
    const directores= await this.directorReposiroty.find() 
    if(!directores.length)throw new NotFoundException(`This action returns all directores`)
     return directores
    }

  findOne(id: number) {
    return `This action returns a #${id} director`;
  }

  update(id: number, updateDirectorDto: UpdateDirectorDto) {
    return `This action updates a #${id} director`;
  }

  remove(id: number) {
    return `This action removes a #${id} director`;
  }
}
