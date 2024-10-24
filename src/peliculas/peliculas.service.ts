import { Inject, Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';

@Injectable()
export class PeliculasService {
  constructor(
    @Inject('PELICULA_REPOSITORY')
    private peliculaReposiroty: Repository<Pelicula>
  ) { }
  create(createPeliculaDto: CreatePeliculaDto) {
    return 'This action adds a new pelicula';
  }

  findAll() {
    return `This action returns all peliculas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pelicula`;
  }

  update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return `This action updates a #${id} pelicula`;
  }

  remove(id: number) {
    return `This action removes a #${id} pelicula`;
  }
}
