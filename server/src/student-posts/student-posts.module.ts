import { Module } from '@nestjs/common';
import { StudentPostsController } from './student-posts.controller';
import { StudentPostsService } from './student-posts.service';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { studentPostSchema } from './schema/student-post-schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: 'StudentPost', schema: studentPostSchema },
    ]),
  ],
  controllers: [StudentPostsController],
  providers: [StudentPostsService],
})
export class StudentPostsModule {}
