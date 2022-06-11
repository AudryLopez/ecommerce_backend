import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
    private readonly _user: User,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    const create = await this._userRepository.create(createUserDto);
    if (!create) throw new BadRequestException();
    return create;
  }

  async findUsers(): Promise<User[]> {
    const users = await this._userRepository.find();
    if (!users) throw new BadRequestException();
    return users;
  }

  async findUser(id: number) {
    const user = await this._userRepository.findOne(id);
    if (!user) throw new BadRequestException();
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const userExits = await this._userRepository.findOne(id);
    if (!userExits)
      throw new BadRequestException(`User ${userExits} not exits`);
    const update = await this._userRepository.update(userExits, updateUserDto);
    if (!update) throw new BadRequestException(`User can't update`);
    return update;
  }

  async removeUser(id: number) {
    const remove = await this._userRepository.delete(id);
    if (!remove) throw new BadRequestException(`user ${id} not found`);
    return remove;
  }
}
