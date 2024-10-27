// src/auth/dto/login.dto.ts
import { IsString, IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  username(username: any, password: string) {
      throw new Error('Method not implemented.');
  }
  
  @IsEmail()
  email: string;

  @MaxLength(15)
  @MinLength(4)
  password: string;
}
