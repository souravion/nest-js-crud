import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users/users.controller';
import { UsersService } from '../service/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../models/users.schema';

@Module({
    imports : [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
