import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(newUser);
  }

  update(id: string, updateUserData: Partial<CreateUserDto>) {
    return this.usersRepository.update(id, updateUserData);
  }

  getById(id: string): Promise<User> {
    return this.usersRepository.findOneOrFail(id);
  }

  delete(id: string) {
    return this.usersRepository.delete(id);
  }
}
