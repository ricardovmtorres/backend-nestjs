import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service/user.service';
import { UsersModule } from './users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ricardotorres:iEDOrJDUI9BtEGxU@cluster-teste.dsujwz8.mongodb.net/?retryWrites=true&w=majority'), UsersModule],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
