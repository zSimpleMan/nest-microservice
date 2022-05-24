import { CacheLibraryService } from '@app/cache-library';
import { TestLibraryService } from '@app/test-library';
import { Controller, Get, Inject, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Cache } from 'cache-manager';
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
    @Inject('SOCKET_SERVICE')
    private readonly socketService: ClientProxy,
    private readonly cacheManager: CacheLibraryService,
    private readonly testLibraryService: TestLibraryService,
  ) {}

  @Get()
  getHello(@Req() req: Request) {
    const data: string = this.userService.get()
    return this.logService.send({ cmd: 'log-data' }, data)
  }

  @Get('/message')
  sendMessage(@Req() req: Request) {
    const data: string = this.userService.get()
    return this.socketService.send({ cmd: 'push-message' }, data)
  }

  @Get('/cache')
  async cache () {
    this.testLibraryService.get()
    const value = await this.cacheManager.get('/cache')

    if (value) {
      return value
    }

    await this.cacheManager.set('/cache', {
      key: '/cache',
      value: 'success'
    })
    
    return 'success'
  }
}
