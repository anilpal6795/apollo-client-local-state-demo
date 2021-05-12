import { ApolloClient } from '@apollo/client';
import typeDefs from './typedefs';
import cache from './cache';

export const client = new ApolloClient({
    uri: 'https://localhost:3001/graphql',
    cache,
    typeDefs
})

export default client;