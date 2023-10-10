import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as multer from 'multer';

//upload file
import { json, urlencoded } from 'express';


async function bootstrap() {
  dotenv.config(); 
  const app = await NestFactory.create(AppModule,{cors:true});

  //upload file
  const upload = multer({ dest: 'uploads/' });
  app.use(upload.any());





  
  await app.listen(3000);
}
bootstrap();
