import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { SocketGateWay } from './socket.gateway';

@Controller()
export class AppController {
  constructor(private readonly socketGateWay: SocketGateWay) {}

  @MessagePattern({ cmd: 'push-message' })
  async get(data) {
    return await this.socketGateWay.sendMessage(data)
  }
}
