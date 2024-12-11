import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FilmsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.FilmCreateInput) {
    return this.prisma.film.create({ data });
  }

  async findAll() {
    return this.prisma.film.findMany({
      include: { scenes: true }, // Para incluir las relaciones si es necesario
    });
  }
}
