import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { Director } from 'src/directores/entities/director.entity';
           

@Injectable()
export class PeliculasService {
  constructor(
    @Inject('PELICULA_REPOSITORY')
    private peliculaRepository: Repository<Pelicula>,
    // @Inject('DIRECTOR_REPOSITORY')
    // private directorRepository: Repository<Director>
  ) { }
  
  async create(createPeliculaDto: CreatePeliculaDto) : Promise<Pelicula>{
    const pelicula= this.peliculaRepository.create(createPeliculaDto)
    return this.peliculaRepository.save(pelicula);
  }

  async findAll():Promise<Pelicula[]> {
     const peliculas= await this.peliculaRepository.find(/*{relations:["directores","genero"]}*/) 
     if(!peliculas.length)throw new NotFoundException(`This action returns all peliculas`)
      return peliculas
     }

  async findOne(id: number) {
    return `This action returns a #${id} pelicula`;
  }

  async update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return `This action updates a #${id} pelicula`;
  }

  async remove(id: number) {
    return `This action removes a #${id} pelicula`;
  }
}
