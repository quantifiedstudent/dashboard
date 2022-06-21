import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "../components/shared/Header";
import Head from "next/head";
import { ApolloProvider } from '@apollo/client';
import {client} from '../api';

function Application({Component, pageProps}: AppProps) {
    return <div>
        <Head>
            <title>QS Dashboard</title>
            <meta name="description" content="Quantified Student Dashboard"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <div style={{marginTop: '140px'}}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>,
        </div>
    </div>
}

export default Application
