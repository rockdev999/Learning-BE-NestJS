import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UsersService } from './users.service';

// este es el controlador de usuarios, que se encargará de manejar las peticiones relacionadas con los usuarios
@Controller('users') // se puede cambiar esta ruta a lo que queramos, por ejemplo 'api/users'
export class UsersController {
  // este se inyecta el servicio de usuarios para poder usar sus métodos en el controlador, es un patron singleton, es decir, se crea una sola instancia del servicio y se comparte entre todos los controladores que lo necesiten
  constructor(private usersService: UsersService) {}
  // TODO GET
  // este método se encargará de devolver todos los usuarios
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.findUserById(id);
  }

  // TODO POST
  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  // TODO DELETE
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  // TODO PUT
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() changes: UpdateUserDto) {
    return this.usersService.updateUser(id, changes);
  }
}
