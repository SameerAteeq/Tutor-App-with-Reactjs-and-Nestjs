import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../auth/schemas/user.schema';
import { StudentPost } from 'src/student-posts/schema/student-post-schema';

@Schema({
  timestamps: true,
})
export class Proposal {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'StudentPost' })
  post: StudentPost;

  @Prop()
  description: string;

  @Prop()
  proposalId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  student: User;

  @Prop({ default: 'PENDING' })
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  tutor: User;
}

export const proposalSchema = SchemaFactory.createForClass(Proposal);
