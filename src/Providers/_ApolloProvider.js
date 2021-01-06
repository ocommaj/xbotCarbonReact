import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export default function Apollo({ children }) {
  const apolloClient = new ApolloClient({
    //uri: "http://localhost:4002/graphql",
    uri: 'https://fathomless-waters-14572.herokuapp.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={ apolloClient }>
      { children }
    </ApolloProvider>
  );
};
