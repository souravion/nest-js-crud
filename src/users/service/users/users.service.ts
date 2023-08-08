import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/models/users.schema';


@Injectable()
export class UsersService {


    constructor(@InjectModel('User') private readonly userModel: Model<User>) {

    }

    async getUsers(): Promise<any[]> {
        return await this.userModel.find().exec();
      }

    async create(user: any): Promise<any> {
        const newUser = new this.userModel(user);
        return await newUser.save();
      }

      async getUserById(id: string): Promise<any> {
        return await this.userModel.findById(id).exec();
      }

      async delete(id: string): Promise<any> {
        return await this.userModel.findByIdAndRemove(id);
      }

      async update(id: string, post: any): Promise<any> {
        return await this.userModel.findByIdAndUpdate(id, post, { new: true });
      }


    // fakeUsersData = [{
    //     name:"Sourav Halder",
    //     email: "sourav.ion@gmail.com",
    // }]
    // getUserInfo(){
    //     return this.fakeUsersData
    // }

    // createUser(userData) {
    //     if(userData){
    //         const createdUser = this.fakeUsersData.push(userData)
    //       if(createdUser){
    //         return this.fakeUsersData
    //       }
    //     }
    // }
}
