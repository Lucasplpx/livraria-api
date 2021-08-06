import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from '../model/livro.model';

@Injectable()
export class LivroService {
  constructor(@InjectModel(Livro) private livroModel: typeof Livro) {}

  async getAll(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  async getOne(id: number): Promise<Livro> {
    return this.livroModel.findByPk(id);
  }

  async create(livro: Livro) {
    this.livroModel.create(livro);
  }

  async update(livro: Livro): Promise<[number, Livro[]]> {
    return this.livroModel.update(livro, {
      where: {
        id: livro.id,
      },
    });
  }

  async remove(id: number) {
    const livro: Livro = await this.getOne(id);
    livro.destroy();
  }
}
