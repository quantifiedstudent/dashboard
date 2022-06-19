import {NextPage} from "next";
import styles from "../../styles/Global.module.css";
import Head from "next/head";
import LineGraph from "../../components/shared/Graphs/LineGraph"
import TimeLine from "../../components/shared/Graphs/TimeLine";
import {HeartRateStressMockData as lineData, SleepTimeLineMockData as sleepData} from "../../mockdata/GraphMockdata";

const Smartwatch: NextPage = () => {
    return (
        <div className={styles.flexContainer}>
            <Head>
                <title>QS Dashboard</title>
                <meta name="description" content="Quantified Student Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.gridContainer}>
                <LineGraph className={styles.bigGraphWrapper} moments={lineData.moments} series={lineData.series}
                           title={lineData.title}/>
            </div>
            <div className={styles.gridContainer}>
                <TimeLine title={sleepData.title} series={sleepData.series} className={styles.bigGraphWrapper}/>
            </div>

        </div>
    )
}

export default Smartwatch;
