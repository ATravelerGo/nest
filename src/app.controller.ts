import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    //this.configService.get('DB_URL')也能访问
    return this.configService.get('dbConfig.dev.type') ?? '你好呀';
  }
}
