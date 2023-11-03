import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpException,
  Query,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if (
      !createUserDto.email ||
      !createUserDto.password ||
      !createUserDto.first_name ||
      !createUserDto.last_name
    )
      throw new HttpException('Faltan datos', 400);
    const result = this.usersService.create(createUserDto);

    return {
      message: 'Usuario creado',
      user: result,
    };
  }

  /*@Post('/:b')
  probarRequest(@Request() req) {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return 'Todo en un objeto';
  }*/

  @Get()
  findAll(@Query() query) {
    const { limit } = query;
    const users = limit
      ? this.usersService.findAll().slice(0, +limit)
      : this.usersService.findAll();

    return {
      status: 'ok',
      data: users,
      message:
        users.length === 0 ? 'No hay usuarios' : `Hay ${users.length} usuarios`,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (isNaN(+id)) throw new HttpException('El id debe ser numerico', 400);
    return this.usersService.findOne(+id) ?? 'No existe el usuario';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const result = this.usersService.remove(+id);
    return {
      message: result ? 'Usuario eliminado' : 'No existe el usuario',
    };
  }
  @Put(':id')
  put(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    const result = this.usersService.update(+id, updateUserDto);
    return {
      message: result ? 'Usuario actualizado' : 'No existe el usuario',
      user: result,
    };
  }
}
