import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from '@apollo/client'
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { RestLink } from 'apollo-link-rest';
import { ApolloLink } from "apollo-link";
// Set `RestLink` with your endpoint
const restLink = new RestLink({ 
  uri: "https://salty-fjord-38974.herokuapp.com" 
});
ReactDOM.render(
  
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
