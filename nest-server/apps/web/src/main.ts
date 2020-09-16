import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express'
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('商城前台展示API')
    .setDescription('供商城项目前台调用')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('m-shop')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('web-api', app, document);

  await app.listen(process.env.WEB_PORT);
}
bootstrap();
