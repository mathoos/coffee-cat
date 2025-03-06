import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // 🔥 Ajoute CORS pour permettre les requêtes du frontend
  app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
  }));

  await app.listen(5000);
}
bootstrap();

