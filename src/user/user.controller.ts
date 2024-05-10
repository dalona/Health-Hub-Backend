import { Controller, Get,post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  hello() {
    return this.userService.getData;
  }
}