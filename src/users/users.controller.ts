 // src/users/users.controller.ts
import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
 

 import { User } from './schema/user.schema'; 
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';

@Controller('users')
export class UsersController {
  UserModule: any;
  constructor(private readonly usersService: UsersService) {}

  
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.UserModule.createUser(createUserDto);
  }

 
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

 
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findUserById(id);
  }

  
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}
