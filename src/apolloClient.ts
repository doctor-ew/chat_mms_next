// /src/apolloClient.ts

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { getApiUri } from './lib/apiConfig';


const apiUrl = getApiUri({ endpoint: 'rickmorty' });
export const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
        uri: apiUrl
    }),
    cache: new InMemoryCache(),
});
