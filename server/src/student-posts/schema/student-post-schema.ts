import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class StudentPost {
  @Prop()
  subject: string;

  @Prop()
  description: string;

  @Prop()
  fee: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}

export const studentPostSchema = SchemaFactory.createForClass(StudentPost);
