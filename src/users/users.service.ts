import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Doe', email: 'jane@example.com' },
    { id: '3', name: 'Bob Smith', email: 'bob@example.com' },
  ];

  // este devolverá un usuario por su id, por ejemplo: /users/1 devolverá el usuario con id 1
  findAll() {
    return this.users;
  }

  // para recuperar se usa el decorador @Param, que nos permite acceder a los parámetros de la ruta, en este caso el id del usuario
  findUserById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  // este método se encargará de crear un nuevo usuario, por ejemplo: /users con el body { "name": "Alice", "email": "xxx.gmail.com" } creará un nuevo usuario con el nombre Alice y el email
  // no valida datos todavia
  createUser(body: CreateUserDto) {
    const newUser: User = {
      ...body,
      id: (this.users.length + 1).toString(),
    };
    this.users.push(newUser);
    return newUser;
  }

  // este método se encargará de eliminar un usuario por su id, por ejemplo: /users/1 eliminará el usuario con id 1
  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    this.users.splice(index, 1);
    return { message: 'User deleted successfully' };
  }

  // este método se encargará de actualizar un usuario por su id, por ejemplo: /users/1 con el body { "name": "Alice", "email": "xxx.gmail.com" } actualizará el usuario con id 1 con el nombre Alice y el email
  updateUser(id: string, changes: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const email = changes?.email;
    // aqui esta para validar el email
    if (email && !email.includes('@')) {
      throw new UnprocessableEntityException('Invalid email format');
    }
    this.users[index] = { ...this.users[index], ...changes };
    return this.users[index];
  }
}
