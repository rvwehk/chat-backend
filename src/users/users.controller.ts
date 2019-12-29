import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) { }

  @Get()
  getUsers(): Promise<User[]> {
    console.log('ici');

    return this.usersService.findAll();
  }

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<any> {
    return await this.usersService.create(user);
  }

}
