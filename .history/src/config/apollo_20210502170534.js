import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import fetch from "node-fetch"

const client = new ApolloClient({
    connectToDevTools:true,
    cache: new InMemoryCache({
        typePolicies: {
          UnconventionalRootQuery: {
            // The RootQueryFragment can only match if the cache knows the __typename
            // of the root query object.
            queryType: true,
          },
        },
      }),
    link: new HttpLink({
        uri: "http://3.12.17.53:4000/",
        fetch
    })
});
export default client;