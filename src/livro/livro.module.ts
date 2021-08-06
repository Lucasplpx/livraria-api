import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LivrosController } from './controller/livros.controller';
import { Livro } from './model/livro.model';
import { LivroService } from './service/livros.service';

@Module({
  imports: [SequelizeModule.forFeature([Livro])],
  controllers: [LivrosController],
  providers: [LivroService],
})
export class LivroModule {}
