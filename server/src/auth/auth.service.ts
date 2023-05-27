import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from './schemas/user.schema';
import mongoose from 'mongoose';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: mongoose.Model<User>,
    private jwtService: JwtService,
  ) {}

  //SignUp
  async signUp(signupDto: SignUpDto): Promise<Boolean> {
    const { name, email, password, role } = signupDto;
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new HttpException(
        'This email is already in use',
        HttpStatus.CONFLICT,
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      await this.userModel.create({
        name,
        email,
        password: hashedPassword,
        role,
      });
      // const { password: password, ...userData } = user.toObject();

      // const token = this.jwtService.sign({ id: user._id });
      return true;
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException(
          'This email is already in use',
          HttpStatus.CONFLICT,
        );
      } else {
        throw new HttpException(
          'Internal Server Error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  //Login
  async login(
    loginDto: LoginDto,
  ): Promise<{ token: string; userData: Partial<User> }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid password');
    }

    const { password: _password, ...userData } = user.toObject();
    const token = this.jwtService.sign({ id: user._id });

    return { token, userData };
  }

  async getAllUser() {
    const users = await this.userModel.find().select('-password').exec();

    const userData = users.map((item) => ({
      id: item._id,
      name: item.name,
      email: item.email,
      role: item.role,
    }));
    return userData;
  }

  async deleteUser(id: string) {
    await this.userModel.deleteOne({ _id: id });
  }
}
