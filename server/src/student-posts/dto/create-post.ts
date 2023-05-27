import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class CreateStudentPost {
  @IsNotEmpty()
  @IsString()
  readonly subject: string;

  @IsNotEmpty()
  @IsNumber()
  readonly fee: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsEmpty({ message: 'You cannot pass the Id' })
  readonly userId: User;
}
