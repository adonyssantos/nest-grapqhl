import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    ) {}

    findAll(): Promise<Post[]> {
        return this.postRepository.find();
    }
}
