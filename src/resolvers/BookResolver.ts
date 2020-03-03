import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { Author } from '../entities/AuthorEntity';
import { Book } from '../entities/BookEntity';
import { IBookService } from '../services/interfaces/IBookService';
import { CreateBookInput } from '../inputs/CreateBookInput';
import { BookService } from '../services/BookService';

@Resolver(of => Book)
export class BookResolver {
    constructor(
        private readonly bookService: BookService,
    ) {}

    @Query(returns => [Book])
    async books() {
        return await this.bookService.getAll();
    }

    @FieldResolver(returns => Author)
    async author(@Root() book: Book) {
        return await this.bookService.findAuthor(book);
    }

    @Mutation(returns => Book)
    async addBook(
        @Arg("book") createBookInput: CreateBookInput,
    ): Promise<Author> {
        return await this.bookService.addBook(createBookInput);
    }
}
