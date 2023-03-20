import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/user';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async getAll() {
        return await this.userModel.find().exec();
    }

    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async create(user: User) {
        const createdTask = new this.userModel(user);
        return await createdTask.save();
    }

    async update(id: string, user: User) {
        const index = this.userModel.updateOne({ _id: id }, user).exec();
        return await this.getById(id);
    }
}
