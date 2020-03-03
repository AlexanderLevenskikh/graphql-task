import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Author } from '../entities/AuthorEntity';
import { Repository } from 'typeorm';
import { Book } from '../entities/BookEntity';
import { IBookService } from './interfaces/IBookService';
import { CreateBookInput } from '../inputs/CreateBookInput';

@Service()
export class BookService implements IBookService {
    constructor(
        @InjectRepository(Author) private readonly authorRepository: Repository<Author>,
        @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
    ) {}

    async getAll(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    async findAuthor(book: Book): Promise<Author> {
        const author = await this.authorRepository.findOne(book.authorId);

        if (!author) {
            throw new Error('Author is not found');
        }
        return author;
    }

    async addBook(createBookInput: CreateBookInput): Promise<Book> {
        return this.bookRepository.save(createBookInput);
    }
}
