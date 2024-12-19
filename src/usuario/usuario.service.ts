import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>

  ) { }


  // async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
  //   const usuario = this.usuarioRepository.create(createUsuarioDto)
  //   return this.usuarioRepository.save(usuario);
  // }

  async findAll(): Promise<Usuario[]> {
    const usuarios = await this.usuarioRepository.find()
    if (!usuarios.length) throw new NotFoundException(`This action returns all usuarios`)
    return usuarios
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (!usuario) throw new NotFoundException(`El usuario con ID ${id} no fue encontrado`);
    return usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.usuarioRepository.preload({
      id,
      ...updateUsuarioDto
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return this.usuarioRepository.save(usuario);
  }

  async remove(id: string): Promise<void> {
    const usuario = await this.findOne(id); // Reutiliza el método `findOne`
    await this.usuarioRepository.remove(usuario);
  }
}
