// characters.module.ts

import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { PrismaService } from '../prisma/prisma.service';  // PrismaService también debe estar importado

@Module({
  controllers: [CharactersController],
  providers: [CharactersService, PrismaService],
})
export class CharactersModule {}
