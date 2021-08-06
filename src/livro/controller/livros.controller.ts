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
  async getAll(): Promise<Livro[]> {
    return this.livroService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Livro> {
    return this.livroService.getOne(params.id);
  }

  @Post()
  async create(@Body() livro: Livro) {
    this.livroService.create(livro);
  }

  @Put()
  async update(@Body() livro: Livro): Promise<[number, Livro[]]> {
    return this.livroService.update(livro);
  }

  @Delete(':id')
  async remove(@Param() params) {
    return this.livroService.remove(params.id);
  }
}
