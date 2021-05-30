import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import fetch from "node-fetch"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    
});
export default client;