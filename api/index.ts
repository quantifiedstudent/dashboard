import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_ENV_SERVER,
    cache: new InMemoryCache()
});

export const BIOMETRICS = gql`
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
