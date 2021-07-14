import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from 'react-apollo'
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { RestLink } from 'apollo-link-rest';
import { ApolloLink } from "apollo-link";
// Set `RestLink` with your endpoint
const restLink = new RestLink({ 
  uri: "https://salty-fjord-38974.herokuapp.com" 
});

const client = new ApolloClient({
  /*
  connectToDevTools:true,
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      UnconventionalRootQuery: {
        // The RootQueryFragment can only match if the cache knows the __typename
        // of the root query object.
        queryType: true,
      },
    },
  }),*/
  link: ApolloLink.from([restLink]),
  cache: new InMemoryCache()
}); 

ReactDOM.render(
  
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
