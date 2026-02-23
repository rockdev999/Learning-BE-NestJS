import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // este es el puerto por defecto, pero se puede configurar a través de la variable de entorno PORT
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
