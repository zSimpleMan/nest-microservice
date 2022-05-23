import { Controller, Get, Inject, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('LOG_SERVICE')
    private readonly logService: ClientProxy,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(@Req() req: Request) {
    const data: string = this.userService.get()
    return this.logService.send({ cmd: 'log-data' }, data)
  }

  @Get('/message')
  sendMessage(@Req() req: Request) {
    const data: string = this.userService.get()
    return this.logService.send({ cmd: 'push-message' }, data)
  }
}
