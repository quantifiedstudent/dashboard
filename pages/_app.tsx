import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "../components/shared/Header";

function MyApp({Component, pageProps}: AppProps) {
    return <div>
        <Header/>
        <div style={{marginTop: '140px'}}>
            <Component {...pageProps} />
        </div>

    </div>
}

export default MyApp
