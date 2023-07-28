import { createSchema, createYoga } from 'graphql-yoga';
import { readFileSync } from 'node:fs';
import { Resolvers, Store, Sells } from './resolvers-types';
import { createServer } from 'node:http';

const schema = readFileSync('schema.graphql', 'utf-8');

const stores: Store[] = [
  {
    id: '0',
    location: 'Paris, France',
    name: 'Librairie',
    __typename: 'Store',
  },
  {
    id: '1',
    location: 'New York, New York, United States',
    name: 'Book store',
    __typename: 'Store',
  },
];

const bookSells: Sells[] = [
  {
    bookId: '0',
    sellsCount: 1932,
    monthYear: '03/22',
    __typename: 'Sells',
    storeId: '0'
  },
  {
    bookId: '1',
    sellsCount: 192,
    monthYear: '03/22',
    __typename: 'Sells',
    storeId: '0'
  },
  {
    bookId: '0',
    sellsCount: 2387,
    monthYear: '03/22',
    __typename: 'Sells',
    storeId: '1'
  },
  {
    bookId: '1',
    sellsCount: 283,
    monthYear: '03/22',
    __typename: 'Sells',
    storeId: '1'
  },
];

const resolvers: Resolvers = {
  Query: {
    bookSells: (_p, args) => bookSells.filter(bs => bs.storeId === args.storeId),
    stores: () => stores,
  },
};

// Create your server
const yoga = createYoga({
  schema: createSchema({
    typeDefs: schema,
    resolvers,
  }),
});

const server = createServer(yoga)

server.listen(3004, () => {
  console.log(`🚀 Server ready at http://localhost:3004${yoga.graphqlEndpoint}`);
});
