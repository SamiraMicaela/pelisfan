import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateListaReproduccionDto } from './dto/create-lista-reproduccion.dto';
import { UpdateListaReproduccionDto } from './dto/update-lista-reproduccion.dto';
import { Repository } from 'typeorm';
import { ListaReproduccion } from './entities/lista-reproduccion.entity';

@Injectable()
export class ListaReproduccionService {

  constructor(
    @Inject('LISTAREPRODUCCION_REPOSITORY')
    private listaReproduccionRepository: Repository<ListaReproduccion>
  ){}

  async create(createListaReproduccionDto: CreateListaReproduccionDto): Promise<ListaReproduccion> {
    const listaReproduccion= this.listaReproduccionRepository.create(createListaReproduccionDto)
    return this.listaReproduccionRepository.save(listaReproduccion);
  }

  async findAll():Promise<ListaReproduccion[]> {
    const listaReproduccion= await this.listaReproduccionRepository.find(/*{relations:[]]}*/) 
    if(!listaReproduccion.length)throw new NotFoundException(`This action returns all listaReproduccion`)
     return listaReproduccion
    }

  findOne(id: number) {
    return `This action returns a #${id} listaReproduccion`;
  }

  update(id: number, updateListaReproduccionDto: UpdateListaReproduccionDto) {
    return `This action updates a #${id} listaReproduccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} listaReproduccion`;
  }
}
