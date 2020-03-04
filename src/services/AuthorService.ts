import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Author } from '../entities/AuthorEntity';
import { Repository } from 'typeorm';
import { CreateAuthorInput } from '../inputs/CreateAuthorInput';

@Service()
export class AuthorService {
    constructor(
        @InjectRepository(Author) private readonly authorRepository: Repository<Author>,
    ) {}

    async getAll(): Promise<Author[]> {
        return this.authorRepository.find();
    }

    async addAuthor(createAuthorInput: CreateAuthorInput): Promise<Author> {
        return this.authorRepository.save(createAuthorInput);
    }
}
