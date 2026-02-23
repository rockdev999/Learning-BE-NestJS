import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from 'env.module';

// este es el controlador principal de la aplicación, que se encargará de manejar las peticiones relacionadas con la raíz de la aplicación, es decir, la ruta '/'
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService<EnvConfig>,
  ) {}

  @Get()
  getHello(): string {
    const myVar = this.configService.get('MY_VAR', { infer: true }); // esto es para obtener una variable de entorno, por ejemplo, si tenemos una variable de entorno llamada MY_VAR, podemos obtener su valor con este método
    const message = this.appService.getHello(); // esto es para crear un mensaje con el valor de la variable de entorno
    return `${message} ${myVar}`; // esto es para devolver el mensaje con el valor de la variable de entorno, por ejemplo, si MY_VAR es 'World', el mensaje será 'Hello World'
    // return this.appService.getHello();
  }
}
