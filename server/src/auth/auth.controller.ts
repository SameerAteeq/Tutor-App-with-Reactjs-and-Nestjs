import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  SignUp(@Body() signUpDto: SignUpDto): Promise<Boolean> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  Login(
    @Body() loginDto: LoginDto,
  ): Promise<{ token: string; userData: Partial<User> }> {
    return this.authService.login(loginDto);
  }

  @Get('users')
  async AllUsers() {
    const users = await this.authService.getAllUser();
    return users;
  }

  @Delete('/deleteUser/:id')
  async deleteById(@Param('id') id: string) {
    await this.authService.deleteUser(id);
  }
}
