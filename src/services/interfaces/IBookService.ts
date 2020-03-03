import { Book } from '../../entities/BookEntity';
import { Author } from '../../entities/AuthorEntity';
import { CreateAuthorInput } from '../../inputs/CreateAuthorInput';
import { CreateBookInput } from '../../inputs/CreateBookInput';

export interface IBookService {
    getAll(): Promise<Book[]>;
    findAuthor(book: Book): Promise<Author>;
    addBook(createBookInput: CreateBookInput): Promise<Book>;
}
