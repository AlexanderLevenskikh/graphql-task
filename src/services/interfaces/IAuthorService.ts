import { Author } from '../../entities/AuthorEntity';
import { CreateAuthorInput } from '../../inputs/CreateAuthorInput';

export interface IAuthorService {
    getAll(): Promise<Author[]>;
    addAuthor(createAuthorInput: CreateAuthorInput): Promise<Author>;
}
