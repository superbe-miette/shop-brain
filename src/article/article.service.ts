import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepo: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return this.articleRepo.save(createArticleDto);
  }

  findAll() {
    return this.articleRepo.find();
  }

  findOne(id: number) {
    return this.articleRepo.findOneBy({ id });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRepo.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.articleRepo.delete(id);
  }
}
