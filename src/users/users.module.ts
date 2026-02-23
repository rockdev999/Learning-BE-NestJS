import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  // aquí van los controladores, que son los encargados de recibir las peticiones y devolver las respuestas
  // siempre vamos a tener una paridad entre controladores y servicios, es decir, por cada controlador vamos a tener un servicio que se encargue de la lógica de negocio
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // esto hace que el servicio esté disponible para otros módulos, por ejemplo, si queremos usar el servicio de usuarios en el módulo de posts, aquí es donde lo exportamos y solo se comparten los servicios, no los controladores, porque los controladores solo son para recibir las peticiones y devolver las respuestas, no tienen lógica de negocio, esa es la función de los servicios
})
export class UsersModule {}
