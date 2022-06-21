import styles from './CanvasInfo.module.css';
import Chart from "react-apexcharts";

export default function CanvasInfo() {

    return <div className={styles.container}>
        <h1>Canvas Assignments</h1>
        <div className={styles.graphContainer}>
            <Chart series={[95]} options={{labels: ['Submitted']}} type="radialBar" width={300} height={300}/>
            <Chart series={[65]} options={{labels: ['Reviewed']}} type="radialBar" width={300} height={300}/>
            <Chart series={[50]} options={{labels: ['Graded']}} type="radialBar" width={300} height={300}/>
        </div>
    </div>
}
