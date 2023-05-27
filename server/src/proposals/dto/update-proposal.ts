import { IsEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class UpdateProposalDto {
  @IsOptional()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly proposalId: string;

  @IsOptional()
  @IsString()
  readonly postId: string;

  @IsOptional()
  @IsString()
  readonly studentId: string;

  @IsOptional()
  @IsString()
  readonly status: string;
}
