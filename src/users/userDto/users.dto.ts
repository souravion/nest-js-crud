import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDto {
    @IsString()
    @MinLength(3)
    username: string
    @IsEmail()
    email: string
}