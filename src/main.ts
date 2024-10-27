import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentacion')
    .setDescription('Esto Es Mi Parcial Del Segundo Corte')
    .setVersion('1.0')
    .addTag('items')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);  
  SwaggerModule.setup('Documentacion', app, documentFactory);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
