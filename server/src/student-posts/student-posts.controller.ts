import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentPostsService } from './student-posts.service';
import { CreateStudentPost } from './dto/create-post';
import { StudentPost } from './schema/student-post-schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('student-posts')
export class StudentPostsController {
  constructor(private readonly studentService: StudentPostsService) {}

  @Post('/uploadPost')
  @UseGuards(AuthGuard())
  async createStudentPost(
    @Body() post: CreateStudentPost,
    @Req() req,
  ): Promise<StudentPost> {
    return this.studentService.CreatePost(post, req.user);
  }

  @Get('/posts')
  async getPosts(): Promise<StudentPost[]> {
    return this.studentService.getAllPost();
  }

  @Get(':id')
  async getPost(@Param('id') id: string): Promise<StudentPost> {
    return await this.studentService.getSinglePost(id);
  }

  @Delete('/del-post/:id')
  async deleteStudentPost(@Param('id') id: string) {
    return await this.studentService.deletePost(id);
  }
}
