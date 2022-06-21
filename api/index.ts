import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});
export const WATCHDATA = gql`
    query GetWatchData {
        WatchData {
            HeartRateData {
                name
                valueType
                datapoints {
                    value
                    timestamp
                }
            },
            StressData {
                name
                valueType
                datapoints {
                    value
                    timestamp
                }
            }
        }
    }
`;
