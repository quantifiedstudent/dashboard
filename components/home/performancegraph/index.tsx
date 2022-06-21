import styles from './PerformanceGraph.module.css'
import LineGraph from '../../shared/Graphs/LineGraph';
import {PerformanceMockData as data} from '../../../mockdata/GraphMockdata';

export default function PerformanceGraph() {
    return <LineGraph className={styles.container} title={data.title} series={data.series} moments={data.moments}/>
}
