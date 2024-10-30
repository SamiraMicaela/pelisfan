import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { In, Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { Director } from 'src/directores/entities/director.entity';
import { Genero } from 'src/genero/entities/genero.entity';

@Injectable()
export class PeliculasService {
  constructor(
    @Inject('PELICULA_REPOSITORY')
    private peliculaRepository: Repository<Pelicula>,
    @Inject('DIRECTOR_REPOSITORY')
    private directorRepository: Repository<Director>,
    @Inject('GENERO_REPOSITORY')
    private generoRepository: Repository<Genero>
  ) { }

  // async create(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
  //   const pelicula = this.peliculaRepository.create(createPeliculaDto)
  //   return this.peliculaRepository.save(pelicula);
  // }

  async create(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    const { directorIds, generoIds, ...data } = createPeliculaDto;
    // creamos la película con el resto de los datos
    const pelicula = this.peliculaRepository.create(data);
    // asignamos los directores si existen
    if (directorIds) {
      pelicula.directores = await this.directorRepository.find({
        where:{id: In(directorIds)}
      });
    }
    // asignamos los generos si existen
    if (generoIds) {
      pelicula.generos = await this.generoRepository.find({
        where:{id: In(generoIds)}//la condicion In de typeORM permite obtener las entidades de director y genero utilizando los ids pasados
      });
    }

    return await this.peliculaRepository.save(pelicula);
  }


  async findAll(): Promise<Pelicula[]> {
    const peliculas = await this.peliculaRepository.find({
      relations: ['directores', 'generos', 'resena'],//y si saco las relaciones
    });
    if (!peliculas.length) throw new NotFoundException(`This action returns all peliculas`)
    return peliculas
  }

  async findOne(id: string): Promise<Pelicula> {
    const pelicula = await this.peliculaRepository.findOne({
      where: { id },
      relations: ['directores', 'generos', 'resena'], // Agregamos las relaciones que queremos cargar
    });//usamos findOne y pasamos el objeto {where:{id}} para especificar que estamos buscando por ID
    if (!pelicula) {
      throw new NotFoundException(`la pelicula con ID ${id}, no fue encontrada`); //si findOne no encuentra la pelicula, devuelve null. En ese caso, lanzamos una excepcion NotFoundException
    }
    return pelicula
  }

  async update(id: string, updatePeliculaDto: UpdatePeliculaDto): Promise<Pelicula> {
    const pelicula = await this.findOne(id); //reutilizamos el metodo findOne para buscar la pelicula
    Object.assign(pelicula, updatePeliculaDto); // usamos Object.assign para copiar las propiedades del updatePeliculaDto al objeto pelicula
    return await this.peliculaRepository.save(pelicula)//guardamos la pelicula en la base de datos y devuelve la pelicula actualizada
  }

  async remove(id: string): Promise<void> {
    const resultado = await this.peliculaRepository.delete(id)//delete() devuelve un objeto que contiene una propiedad affected, que indica cuantas filas fueron afectadas por la operacion
    if (resultado.affected === 0) {// si affected es 0, significa que no encontro una pelicula con ese ID, asi que lanzamos una NotFoundException.
      throw new NotFoundException(`La pelicula ${id}, no fue encontrada`)
    }

  }
}
