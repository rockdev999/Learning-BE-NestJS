Como se instalan los controllers
**nest g controller users/aritcols/**
este creara un nuevo archivo que sera de USERS

status codes mas comunes en las respuestas de una API RESTful:
200 OK: La solicitud se ha procesado correctamente y se devuelve la respuesta esperada.
201 Created: La solicitud se ha procesado correctamente y se ha creado un nuevo recurso.
204 No Content: La solicitud se ha procesado correctamente pero no se devuelve ningún contenido.
400 Bad Request: La solicitud no se ha procesado debido a un error del cliente, como datos inválidos o falta de parámetros requeridos.
401 Unauthorized: La solicitud requiere autenticación y el cliente no ha proporcionado credenciales válidas.
403 Forbidden: El cliente no tiene permiso para acceder al recurso solicitado.
404 Not Found: El recurso solicitado no se ha encontrado en el servidor.
500 Internal Server Error: Se ha producido un error en el servidor al procesar la solicitud.

para excepciones es la 403 para usuarios no autorizados

esto es para validar la informacion de los DTO's

$ npm i --save class-validator class-transformer

luego de eso vamos a crear un nuevo archivo

user.dto.ts

los decoradores o los validadores se tiene que activar en el main.ts

const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe)

Ahora vamos a generar un servicio eso para que el controller tenga indivualmente los endpoins y la logica de negocio

nest g service users

Variables de entorno
npm i --save @nestjs/config

Programacion Modular, encapsular toda la funcionalidad
nest g mo users
