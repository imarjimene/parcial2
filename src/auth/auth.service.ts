// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/schema/user.schema';  

@Injectable()
export class AuthService {
  UserModel: any;
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

 
  async register(createUserDto: CreateUserDto): Promise<User> {
      return this.UserModel.createUser(createUserDto);
  }

   
  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
     const user = await this.usersService.validateUser(loginDto.username, loginDto.password);
    
    if (!User) {
      throw new UnauthorizedException(' error 404 usuario no se encontro ');
    }

     const payload = { username: user, sub: user};
    const accessToken = this.jwtService.sign(payload);
    
    return { accessToken };
  }
}
