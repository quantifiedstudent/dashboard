import {NextPage} from "next";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import TimeGraph from "../../components/shared/Graphs/TimeGraph";
import watchdata from '../../mockdata/watchdata.json';

const Smartwatch: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>QS Dashboard</title>
                <meta name="description" content="Quantified Student Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div>
                <TimeGraph datapoints={watchdata.datapoints}/>
            </div>
            <main className={styles.main}>
                <h1 className={styles.title}>

                </h1>
            </main>

        </div>
    )
}

export default Smartwatch;
