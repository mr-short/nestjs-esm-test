import { Body, Controller, Get } from '@nestjs/common';
import { ExampleDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() body: ExampleDto): string {
    return this.appService.getHello();
  }
}
