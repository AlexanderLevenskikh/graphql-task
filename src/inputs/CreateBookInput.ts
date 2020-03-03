import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class CreateBookInput {
    @Field(type => String)
    name: string;

    @Field(type => Number)
    pageCount: number;

    @Field(type => Number)
    authorId: number;
}
