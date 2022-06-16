import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger: console,
    },
  );
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get('APP_PORT'), '0.0.0.0');
  console.log(
    '::INFO:: App listening on localhost:' + configService.get('APP_PORT'),
  );
}
bootstrap();
