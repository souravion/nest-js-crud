import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb+srv://scripters:RCqO2P7t0FH8bcvU@chatcluster.lmdxksy.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
