import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "../components/shared/Header";
import {Provider} from 'react-redux';
import store from "../statemanagement/app.reducer";

function MyApp({Component, pageProps}: AppProps) {
    return <div>
        <Provider store={store}>
            <Header/>
            <div style={{marginTop: '140px'}}>
                <Component {...pageProps} />
            </div>
        </Provider>
    </div>
}

export default MyApp
