import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Author } from './AuthorEntity';

@Entity()
@ObjectType()
export class Book extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    bookId: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => Number)
    @Column()
    pageCount: number;

    @Field(() => Number)
    @Column()
    authorId: number;

    @ManyToOne(type => Author)
    author: Author;
}
