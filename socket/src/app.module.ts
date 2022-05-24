import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketGateWay } from './socket.gateway';
import { CacheLibraryModule } from '@app/cache-library'
@Module({
  imports: [CacheLibraryModule],
  controllers: [AppController],
  providers: [AppService, SocketGateWay],
})
export class AppModule {}
