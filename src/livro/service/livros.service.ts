import { Injectable } from '@nestjs/common';
import { Livro } from '../model/livro.model';

@Injectable()
export class LivroService {
  livros: Livro[] = [
    new Livro('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Livro('LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Livro('LIV03', 'Inteligencia Artificial', 49.9),
  ];

  getAll(): Livro[] {
    return this.livros;
  }

  getOne(id: number): Livro {
    return this.livros[id];
  }

  create(livro: Livro) {
    livro.id = 7;
    this.livros.push(livro);
  }

  update(livro: Livro): Livro {
    return livro;
  }

  remove(id: number) {
    return this.livros.pop();
  }
}
