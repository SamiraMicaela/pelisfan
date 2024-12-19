import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy/jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard/jwt-auth.guard';

@Module({
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  controllers: [AuthController]
})
export class AuthModule {}
