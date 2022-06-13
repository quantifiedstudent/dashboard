import styles from "../Shared.module.css";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

const series = [
    {
        data: [
            {
                x: 'Monday',
                y: [
                    new Date(2020, 12, 2, 2).getTime(),
                    new Date(2020, 12, 2, 10).getTime(),
                ]
            },
            {
                x: 'Tuesday',
                y: [
                    new Date(2020, 12, 3, 3).getTime(),
                    new Date(2020, 12, 3, 11).getTime(),
                ]
            },
            {
                x: 'Wednesday',
                y: [
                    new Date(2020, 12, 4, 4).getTime(),
                    new Date(2020, 12, 4, 13).getTime(),
                ]
            },
            {
                x: 'Thursday',
                y: [
                    new Date(2020, 12, 5, 1).getTime(),
                    new Date(2020, 12, 5, 10).getTime()
                ]
            },
            {
                x: 'Friday',
                y: [
                    new Date(2020, 12, 6, 4).getTime(),
                    new Date(2020, 12, 6, 13).getTime()
                ]
            },
            {
                x: 'Saturday',
                y: [
                    new Date(2020, 12, 7, 6).getTime(),
                    new Date(2020, 12, 7, 14).getTime()
                ]
            },
            {
                x: 'Sunday',
                y: [
                    new Date(2020, 12, 8, 2).getTime(),
                    new Date(2020, 12, 8, 10).getTime(),
                ]
            }
        ]
    }
]

const options: ApexOptions = {
    chart: {
        height: 350,
        type: 'rangeBar'
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    xaxis: {
        type: 'datetime'
    },
    title: {
        text: 'Sleep this week'
    }
}
export default function TimeLine() {

    return <div className={styles.bigGraphWrapper}>
        <Chart
            options={options}
            series={series}
            type="rangeBar"
            width="1000"
            height="400"
        />
    </div>
}
