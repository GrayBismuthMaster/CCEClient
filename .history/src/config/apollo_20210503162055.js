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
        uri: "http://whispering-atoll-47132.herokuapp.com/",
        fetch
    })
    //uri: "https://whispering-atoll-47132.herokuapp.com/",
});
export default client;