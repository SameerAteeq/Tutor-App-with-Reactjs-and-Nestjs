import { IsEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { StudentPost } from '../../student-posts/schema/student-post-schema';

export class createProposalDto {
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly proposalId: string;

  @IsOptional()
  @IsString()
  readonly student: User;

  @IsNotEmpty()
  @IsString()
  readonly post: StudentPost;

  @IsNotEmpty()
  @IsString()
  readonly status: string;

  @IsEmpty({ message: 'You cannot pass the Id' })
  readonly tutor: User;
}
