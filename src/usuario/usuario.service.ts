import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) { }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario= this.usuarioRepository.create(createUsuarioDto)
    return this.usuarioRepository.save(usuario);
  }

  async findAll():Promise<Usuario[]> {
    const usuarios= await this.usuarioRepository.find(/*{relations:[]]}*/) 
    if(!usuarios.length)throw new NotFoundException(`This action returns all usuarios`)
     return usuarios
    }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
