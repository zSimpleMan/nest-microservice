import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheLibraryModule } from '@app/cache-library'

@Module({
  imports: [
    CacheLibraryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
