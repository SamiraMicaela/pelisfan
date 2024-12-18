import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { HashService } from './hash/hash.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuarioService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService
  ) { }

  private async verifyUniqueFields(email: string, userName: string): Promise<void> {
    const existingUser = await this.usuarioRepository.findOne({
      where: [{ email }, { userName }],
    });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new BadRequestException('El correo electrónico ya está registrado.');
      }
      if (existingUser.userName === userName) {
        throw new BadRequestException('El nombre de usuario ya está registrado.');
      }
    }
  }

  async register(createUsuarioDto: CreateUsuarioDto) {
    const { email, userName, password } = createUsuarioDto;

    // Verifica que el email y el userName sean únicos
    await this.verifyUniqueFields(email, userName);

    // Cifra la contraseña
    const hashedPassword = await this.hashService.hashPassword(password);

    try {
        // Crea y guarda el nuevo usuario
        const newUser = this.usuarioRepository.create({
            ...createUsuarioDto,
            password: hashedPassword,
        });
        await this.usuarioRepository.save(newUser);

        // Retorna el usuario sin la contraseña
        const { password: _, ...rest } = newUser;
        return rest; 
    } catch (error) {
        throw new BadRequestException(error.message);
    }
}

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.usuarioRepository.findOneBy({ email: loginDto.email });
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const isAuthenticated = await this.hashService.comparePassword(loginDto.password, user.password);
    if (!isAuthenticated) throw new UnauthorizedException('Invalid email or password');

    const payload = { username: user.userName, sub: user.id, role: user.rol };
    return { access_token: this.jwtService.sign(payload) };
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
