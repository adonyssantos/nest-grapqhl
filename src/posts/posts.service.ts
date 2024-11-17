import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from 'src/authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private readonly postRepository: Repository<Post>,
        private readonly authorsService: AuthorsService
    ) {}

    findAll(): Promise<Post[]> {
        return this.postRepository.find();
    }

    findOne(id: number): Promise<Post> {
        return this.postRepository.findOne({
            where: {
                id
            }
        })
    }

    createPost(post: CreatePostInput): Promise<Post> {
        const newPost = this.postRepository.create(post)
        return this.postRepository.save(newPost)
    }

    getAuthor(authorId: number): Promise<Author> {
        return this.authorsService.findOne(authorId)
    }
}
