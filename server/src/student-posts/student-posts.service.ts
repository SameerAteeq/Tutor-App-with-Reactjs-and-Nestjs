import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StudentPost } from './schema/student-post-schema';
import { Model } from 'mongoose';
import { User } from '../auth/schemas/user.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class StudentPostsService {
  constructor(
    @InjectModel(StudentPost.name)
    private studentModel: mongoose.Model<StudentPost>,
  ) {}

  //Create post
  async CreatePost(post: StudentPost, user: User): Promise<StudentPost> {
    const data = Object.assign(post, { userId: user._id });
    const res = await this.studentModel.create(data);
    return res;
  }

  //getAll Posts
  async getAllPost(): Promise<StudentPost[]> {
    const posts = await this.studentModel.find().exec();
    return posts;
  }

  async getSinglePost(id: string): Promise<StudentPost> {
    const post = await this.studentModel.findById({ _id: id });
    if (!post) {
      throw new NotFoundException(`post not found`);
    }
    return post;
  }

  //Deleting post
  async deletePost(id: string) {
    const existingPost = await this.studentModel.findById({ _id: id });
    if (!existingPost) {
      throw new NotFoundException(`post not found`);
    }
    await this.studentModel.deleteOne({ _id: id });
    return true;
  }
}
