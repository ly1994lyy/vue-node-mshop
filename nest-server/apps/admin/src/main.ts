import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()

  app.useStaticAssets('uploads',{
    prefix:'/uploads'
  })

  const options = new DocumentBuilder()
    .setTitle('商城后台管理API')
    .setDescription('供商城项目后台调用')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('m-shop')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('admin-api', app, document);

  await app.listen(process.env.ADMIN_PORT);
}
bootstrap();
