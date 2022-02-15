import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  findById(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      await this.usersService.create(createUserDto);

      return res.sendStatus(HttpStatus.CREATED);
    } catch (err) {
      throw err;
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<CreateUserDto>,
    @Res() res: Response,
  ) {
    try {
      await this.usersService.update(id, updateData);

      return res.sendStatus(HttpStatus.OK);
    } catch (err) {
      throw err;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.usersService.delete(id);

      return res.sendStatus(HttpStatus.OK);
    } catch (err) {
      throw err;
    }
  }
}
