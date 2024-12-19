import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { LoginDto } from '../dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.authService.register(createUsuarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }
}
