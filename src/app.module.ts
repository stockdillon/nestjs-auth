import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/controllers/auth/auth.controller';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.MYSQL_DB_HOST,
    port: Number.parseInt(process.env.MYSQL_DB_PORT),
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_NAME,
  })],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
