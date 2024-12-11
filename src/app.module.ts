import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { FilmsService } from './films/films.service';
import { FilmsController } from './films/films.controller';
import { ScenesService } from './scenes/scenes.service';
import { ScenesController } from './scenes/scenes.controller';
import { CharactersService } from './characters/characters.service';
import { CharactersController } from './characters/characters.controller';  // Importa el controlador de personajes

@Module({
  imports: [],
  controllers: [FilmsController, ScenesController, CharactersController],  // Agrega el controlador de personajes
  providers: [FilmsService, ScenesService, CharactersService, PrismaService],  // Agrega el servicio de personajes
})
export class AppModule {}
