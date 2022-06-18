import styles from "../Shared.module.css";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import moment from "moment";

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
        text: 'Heartrate Correlated to Stress',
        align: 'left'
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
        name: "Heartrate",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
    },
    {
        name: "Stress",
        data: [52, 12, 57, 12, 86, 42, 32, 34]
    }
]

function LineGraph() {
    return <div className={styles.bigGraphWrapper}>
        <Chart
            options={options}
            series={series}
            type="line"
            height="400"
        />
    </div>
}

export default LineGraph;
