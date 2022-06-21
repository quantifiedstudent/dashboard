import {NextPage} from "next";
import styles from "../../styles/Global.module.css";
import LineGraph from "../../components/shared/Graphs/LineGraph"
import TimeLine from "../../components/shared/Graphs/TimeLine";
import {HeartRateStressMockData as lineData, SleepTimeLineMockData as sleepData} from "../../mockdata/GraphMockdata";

const Smartwatch: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.gridContainer}>
                    <LineGraph className={styles.bigGraphWrapper} moments={lineData.moments} series={lineData.series}
                               title={lineData.title}/>
                </div>
                <div className={styles.gridContainer}>
                    <TimeLine title={sleepData.title} series={sleepData.series} className={styles.bigGraphWrapper}/>
                </div>
            </div>
        </div>
    )
}

export default Smartwatch;
