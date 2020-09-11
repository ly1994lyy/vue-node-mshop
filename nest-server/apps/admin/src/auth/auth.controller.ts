import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './login.dto';

@Controller('auth')
@ApiTags('管理员登录认证')
export class AuthController {
    constructor(
        private jwtService:JwtService
    ){}

    @Post()
    @UseGuards(AuthGuard('local'))
    async login(@Body() loginDto:LoginDto,@Req() req){
        return {
            token:this.jwtService.sign(String(req.user._id))
        }
    }
}
