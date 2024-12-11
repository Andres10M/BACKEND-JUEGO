import { Controller, Get, Post, Body } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Prisma } from '@prisma/client';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  async create(@Body() data: Prisma.FilmCreateInput) {
    return this.filmsService.create(data);
  }

  @Get()
  async findAll() {
    return this.filmsService.findAll();
  }
}
