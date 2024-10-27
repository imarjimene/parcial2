// src/auth/dto/register.dto.ts
import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
