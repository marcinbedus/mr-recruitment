import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Length(0, 50)
  firstName: string;

  @Length(0, 50)
  lastName: string;
}
