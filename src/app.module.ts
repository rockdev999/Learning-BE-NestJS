import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

// esto engloba donde podemos tener configuradores servicios
@Module({
  imports: [
    // aqui configuraremos las variables de entorno, por ejemplo, si queremos usar una base de datos, aquí es donde configuraremos la conexión a la base de datos, por ejemplo, usando TypeORM o Mongoose
    ConfigModule.forRoot({
      isGlobal: true, // esto hace que las variables de entorno estén disponibles en toda la aplicación, no es necesario importarlo en cada módulo
    }),
    UsersModule,
  ],
})
export class AppModule {}
