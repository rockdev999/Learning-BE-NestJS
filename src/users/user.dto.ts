/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty() // @IsOptional() si queremos que el campo sea opcional
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional() // @IsOptional() si queremos que el campo sea opcional
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;
}
