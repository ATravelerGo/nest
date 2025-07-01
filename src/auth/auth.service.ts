import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  //登录功能调用这个
  async invalidateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) throw new UnauthorizedException('user not found!');

    const isMatchPassword = await compare(password, user.password);

    if (!isMatchPassword) throw new UnauthorizedException('password incorrect');

    return { id: user.id };
  }
}
