import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports:[PassportModule],
  controllers: [AuthController],
  providers:[LocalStrategy,JwtStrategy]
})
export class AuthModule {}
