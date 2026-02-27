import { Controller, Get } from '@nestjs/common';

@Controller('pets')
export class PetsController {
  @Get('/')
  findAll() {
    return 'Ola';
  }
}
