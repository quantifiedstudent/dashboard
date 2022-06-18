import {NextPage} from "next";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import TimeGraph from "../../components/shared/Graphs/LineGraph"
import TimeLine from "../../components/shared/Graphs/TimeLine";

const Smartwatch: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>QS Dashboard</title>
                <meta name="description" content="Quantified Student Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.gridContainer}>
                <TimeGraph/>
                <TimeLine/>
            </div>

        </div>
    )
}

export default Smartwatch;
