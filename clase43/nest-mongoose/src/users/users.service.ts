import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    return newUser;
  }

  async findAll() {
    const allUsers = await this.userModel.find();
    return allUsers;
  }

  async findOne(id: string) {
    const oneUser = await this.userModel.findOne({ _id: id });

    if (!oneUser) {
      throw new NotFoundException(`No existe el usuario con id ${id}`);
    }

    return oneUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const oneUser = await this.findOne(id);

    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );

    return {
      message: 'Usuario actualizado',
      oldData: oneUser,
      newData: updatedUser,
    };
  }

  async updatePut(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
    return updatedUser;
  }

  async remove(id: string) {
    const oneUser = await this.findOne(id);

    const deletedUser = await this.userModel.findByIdAndDelete(id);

    return {
      message: 'Usuario borrado',
      data: oneUser,
    };
  }
}
