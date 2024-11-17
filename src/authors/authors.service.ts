import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private readonly authorRepository: Repository<Author>,
  ) {}
  
  create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    return this.authorRepository.save(createAuthorInput);
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return this.authorRepository.update(id, updateAuthorInput)
  }

  remove(id: number) {
    return this.authorRepository.delete(id);
  }
}
