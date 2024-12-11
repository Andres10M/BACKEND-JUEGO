import { Controller, Post, Body } from '@nestjs/common';
import { ScenesService } from './scenes.service';
import { Prisma } from '@prisma/client';

@Controller('scenes')
export class ScenesController {
  constructor(private readonly scenesService: ScenesService) {}

  // Crear una escena
  @Post()
  async create(@Body() data: Prisma.SceneCreateInput) {
    return this.scenesService.create(data);
  }
}
