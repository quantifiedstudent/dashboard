import {NextPage} from "next";
import styles from "../../styles/Global.module.css";
import LineGraph from "../../components/shared/Graphs/LineGraph"
import TimeLine from "../../components/shared/Graphs/TimeLine";
import {SleepTimeLineMockData as sleepData} from "../../mockdata/GraphMockdata";
import { useQuery } from "@apollo/client";
import { BIOMETRICS } from '../../api';
import { WatchDataConverter } from "../../api/dataconverter";
import { LineGraphData } from "../../interfaces/data";

const Smartwatch: NextPage = () => {
    const { loading, error, data } = useQuery(BIOMETRICS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.gridContainer}>
                    <LineGraph className={styles.bigGraphWrapper} lineGraphData={WatchDataConverter(data)}/>
                </div>
                <div className={styles.gridContainer}>
                    <TimeLine title={sleepData.title} series={sleepData.series} className={styles.bigGraphWrapper}/>
                </div>
            </div>
        </div>
    )
}

export default Smartwatch;
