import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USER_DB,
      password: process.env.PASS_DB,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    LivroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
