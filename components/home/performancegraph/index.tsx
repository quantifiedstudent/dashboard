import styles from './PerformanceGraph.module.css'
import LineGraph from '../../shared/Graphs/LineGraph';
import {PerformanceMockData as data} from '../../../mockdata/GraphMockdata';
import { LineGraphData } from '../../../interfaces/data';

const lineGraphData: LineGraphData = {
    title: data.title,
    series: data.series,
    moments: data.moments
}

export default function PerformanceGraph() {
    return <LineGraph className={styles.container} lineGraphData={lineGraphData}/>
}
