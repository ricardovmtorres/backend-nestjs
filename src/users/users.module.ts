import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './shared/user.service/user.service';
import { User } from './shared/user/user';
import { UsersController } from './users.controller';

@Module({
    imports: [MongooseModule.forFeature([
    {
        name: "User",
        schema: User
    }
])],
    controllers: [UsersController],
    providers: [UserService],})
export class UsersModule {}
