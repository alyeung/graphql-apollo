import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

const GRAPHQL_PORT = process.env.REACT_APP_GRAPHQL_PORT || 3010;

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: `http://localhost:${GRAPHQL_PORT}/graphql`,
});

const client = new ApolloClient({
  link, cache, connectToDevTools: true,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
