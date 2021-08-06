import { Module } from '@nestjs/common';
import { LivrosController } from './controller/livros.controller';
import { LivroService } from './service/livros.service';

@Module({
  imports: [],
  controllers: [LivrosController],
  providers: [LivroService],
})
export class LivroModule {}
