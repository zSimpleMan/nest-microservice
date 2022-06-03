import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CacheLibraryModule } from '@libs';
import { TestLibraryModule } from '@libs';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'development' ? './config/.development.env' : './config/.env'
    }),
    UserModule,
    CacheLibraryModule,
    TestLibraryModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'LOG_SERVICE',
      useFactory: (config: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.REDIS,
          options: {
            url: config.get('REDIS1')
          }
        });
      },
      inject: [ConfigService]
    },
    {
      provide: 'SOCKET_SERVICE',
      useFactory: (config: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.REDIS,
          options: {
            url: config.get('REDIS2')
          }
        });
      },
      inject: [ConfigService]
    }
  ],
})
export class AppModule {}
