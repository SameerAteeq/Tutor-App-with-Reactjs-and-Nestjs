import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MinLength,
  IsEnum,
} from 'class-validator';
import { Role } from '../enums';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter valid email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Role, { message: 'Please enter a correct role' })
  readonly role: Role;
}
