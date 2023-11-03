import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { data } from './data';

interface UpdateUserDtoProps {
  first_name?: String;
  last_name?: String;
  email?: String;
  password?: String;
  avatar?: String;
}

@Injectable()
export class UsersService {
  users: Array<User>;

  constructor() {
    this.users = [...data];
  }
  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    const index = this.users.findIndex((user) => user.id === id);

    if (index !== -1) {
      updateUserDto?.first_name
        ? (this.users[index].first_name = updateUserDto?.first_name)
        : null;
      updateUserDto?.last_name
        ? (this.users[index].last_name = updateUserDto?.last_name)
        : null;
      updateUserDto?.email
        ? (this.users[index].email = updateUserDto?.email)
        : null;
      updateUserDto?.password
        ? (this.users[index].password = updateUserDto?.password)
        : null;
    }
    return updateUserDto;
  }

  remove(id: number) {
    const user = this.users.find((user) => user.id === id);
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) this.users.splice(index, 1);

    return user;
  }
}
