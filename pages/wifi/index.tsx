import {NextPage} from "next";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

const Wifi: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>QS Dashboard</title>
                <meta name="description" content="Quantified Student Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Wifi
                </h1>
            </main>

        </div>
    )
}

export default Wifi;
