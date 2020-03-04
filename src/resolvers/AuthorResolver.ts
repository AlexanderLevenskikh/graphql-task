import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Author } from '../entities/AuthorEntity';
import { Service } from 'typedi';
import { CreateAuthorInput } from '../inputs/CreateAuthorInput';
import { AuthorService } from '../services/AuthorService';

@Service()
@Resolver(of => Author)
export class AuthorResolver {
    constructor(
        private readonly authorService: AuthorService,
    ) {}

    @Query(returns => [Author])
    async authors() {
        return await this.authorService.getAll();
    }

    @Mutation(returns => Author)
    async addAuthor(
        @Arg("author") createAuthorInput: CreateAuthorInput,
    ): Promise<Author> {
        return await this.authorService.addAuthor(createAuthorInput);
    }
}
