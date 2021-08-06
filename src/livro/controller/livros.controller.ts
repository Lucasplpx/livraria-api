import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from '../model/livro.model';
import { LivroService } from '../service/livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livroService: LivroService) {}

  @Get()
  getAll(): Livro[] {
    return this.livroService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Livro {
    return this.livroService.getOne(params.id);
  }

  @Post()
  create(@Body() livro: Livro) {
    this.livroService.create(livro);
  }

  @Put()
  update(@Body() livro: Livro): Livro {
    return this.livroService.update(livro);
  }

  @Delete(':id')
  remove(@Param() params) {
    return this.livroService.remove(params.id);
  }
}
