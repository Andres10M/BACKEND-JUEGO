// characters.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')  // Asegúrate de que esta ruta sea correcta
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Post()
  async create(
    @Body('description') description: string,
    @Body('cost') cost: number,
    @Body('stock') stock: number,
    @Body('sceneId') sceneId: number
  ) {
    return this.charactersService.create(description, cost, stock, sceneId);
  }
}
