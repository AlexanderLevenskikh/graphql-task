import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class Author extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    authorId: number;

    @Field(() => String)
    @Column()
    name: string;
}
