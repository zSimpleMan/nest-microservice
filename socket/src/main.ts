import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const microservice = await app.connectMicroservice(
    {
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379'
      }
    }
  )
  await app.startAllMicroservices()
  await app.listen(3030)
}
bootstrap();
