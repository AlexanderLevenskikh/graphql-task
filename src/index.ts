import 'reflect-metadata';
import { createConnection, useContainer as ormUseContainer } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { BookResolver } from './resolvers/BookResolver';
import { AuthorResolver } from './resolvers/AuthorResolver';
import { Container } from 'typedi';

async function bootstrap() {
    ormUseContainer(Container);
    await createConnection();
    const schema = await buildSchema({
        resolvers: [BookResolver, AuthorResolver],
        container: Container,

    });
    const server = new ApolloServer({ schema });

    await server.listen(3000);
}

bootstrap();
