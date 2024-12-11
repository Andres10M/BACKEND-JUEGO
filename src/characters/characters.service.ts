// characters.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';  // Asegúrate de que la ruta de PrismaService sea correcta

@Injectable()
export class CharactersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(description: string, cost: number, stock: number, sceneId: number) {
    try {
      const sceneExists = await this.prisma.scene.findUnique({
        where: { id: sceneId },
      });

      if (!sceneExists) {
        throw new Error('La escena asociada no existe.');
      }

      const newCharacter = await this.prisma.character.create({
        data: {
          description,
          cost,
          stock,
          sceneId,
        },
      });

      return newCharacter;
    } catch (error) {
      throw new Error(`Error al crear el personaje: ${error.message}`);
    }
  }
}
