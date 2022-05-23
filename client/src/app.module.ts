import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule,
    ClientsModule.register([
      {
        name: 'LOG_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379'
        }
      },
      {
        name: 'SOCKET_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379'
        }
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
