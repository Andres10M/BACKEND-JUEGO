import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ScenesService {
  constructor(private prisma: PrismaService) {}

  // Crear una escena
  async create(data: Prisma.SceneCreateInput) {
    return this.prisma.scene.create({ data });
  }

  // Obtener todas las escenas
  async findAll() {
    return this.prisma.scene.findMany({
      include: { characters: true }, // Incluir los personajes si es necesario
    });
  }
}
