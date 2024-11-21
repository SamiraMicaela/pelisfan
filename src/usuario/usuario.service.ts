import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { HashService } from './hash/hash.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsuarioService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
    private readonly hashService: HashService
  ) { }

  async register(createUsuarioDto: CreateUsuarioDto) {
    const securedPassword = await this.hashService.hashPassword(createUsuarioDto.password);
    try {
      const newUser = this.usuarioRepository.create({
        ...createUsuarioDto,
        password : securedPassword
      });
      await this.usuarioRepository.save(newUser)
      const {password, id,rol, ...rest}= newUser
      return rest;
    } catch (error) {
      throw new BadRequestException(error.message)
    }

  }

  async login(loginDto: LoginDto): Promise<Usuario>{
    const user = await this.usuarioRepository.findOneBy({
      email: loginDto.email,
    })
    if(!user) throw new UnauthorizedException('invalid email or password')
    const isAuthenticated = await this.hashService.comparePassword(loginDto.password, user.password)
  if(!isAuthenticated) throw  new UnauthorizedException('Invalid email or password ')
    return user
  }


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

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
