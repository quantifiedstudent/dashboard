import styles from './PerformanceGraph.module.css'
import {ApexOptions} from "apexcharts";
import moment from "moment";
import Chart from "react-apexcharts";

const options: ApexOptions = {
    chart: {
        id: "basic-line",
        width: '100%',
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },
        toolbar: {
            autoSelected: 'zoom'
        },
    },
    title: {
        text: 'Overall Performance',
        align: 'left',
        style: {
            fontSize: '20px'
        }
    },
    xaxis: {
        categories: [
            moment(new Date('2019-03-01')).format(),
            moment(new Date('2019-03-02')).format(),
            moment(new Date('2019-03-03')).format(),
            moment(new Date('2019-03-04')).format(),
            moment(new Date('2019-03-05')).format(),
            moment(new Date('2019-03-06')).format(),
            moment(new Date('2019-03-07')).format(),
            moment(new Date('2019-03-08')).format(),
        ],
        type: 'datetime'
    }
}
const series = [
    {
        name: "Performance",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
    },
]

export default function PerformanceGraph() {
    return <div>
        <Chart
            className={styles.container}
            options={options}
            series={series}
            type="line"
            height="400"
        />
    </div>
}
