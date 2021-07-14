import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from '@apollo/client'
import client from './config/apollo'
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
ReactDOM.render(
  
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
