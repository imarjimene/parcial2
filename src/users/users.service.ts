import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';

@Injectable()
export class UsersService {
    updateUser(id: string, updateUserDto: UpdateUserDto): import("./schema/user.schema").User | PromiseLike<import("./schema/user.schema").User> {
        throw new Error('Method not implemented.');
    }
    deleteUser(id: string): void | PromiseLike<void> {
        throw new Error('Method not implemented.');
    }
    findUserById(id: string): import("./schema/user.schema").User | PromiseLike<import("./schema/user.schema").User> {
        throw new Error('Method not implemented.');
    }
    findAllUsers(): import("./schema/user.schema").User[] | PromiseLike<import("./schema/user.schema").User[]> {
        throw new Error('Method not implemented.');
    }
    validateUser(username: any, password: string) {
        throw new Error('Method not implemented.');
    }
    createUser(createUserDto: CreateUserDto) {
        throw new Error('Method not implemented.');
    }
}
