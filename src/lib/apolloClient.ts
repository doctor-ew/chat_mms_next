// /src/lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { getApiUri } from './apiConfig'; // Import the function

export const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
        uri: getApiUri({ endpoint: 'rickmorty' }), // Use the function to get the URI
    }),
    cache: new InMemoryCache(),
});
