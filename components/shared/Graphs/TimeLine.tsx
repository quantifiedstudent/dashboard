import styles from "../Global.module.css";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

const series = [
    {
        data: [
            {
                x: 'Monday',
                y: [
                    new Date(2020, 12, 2, 2).getHours(),
                    new Date(2020, 12, 2, 11).getHours(),
                ]
            },
            {
                x: 'Tuesday',
                y: [
                    new Date(2020, 12, 3, 3).getHours(),
                    new Date(2020, 12, 3, 11).getHours(),
                ]
            },
            {
                x: 'Wednesday',
                y: [
                    new Date(2020, 12, 4, 4).getHours(),
                    new Date(2020, 12, 4, 13).getHours(),
                ]
            },
            {
                x: 'Thursday',
                y: [
                    new Date(2020, 12, 5, 4).getHours(),
                    new Date(2020, 12, 5, 12).getHours()
                ]
            },
            {
                x: 'Friday',
                y: [
                    new Date(2020, 12, 6, 4).getHours(),
                    new Date(2020, 12, 6, 12).getHours()
                ]
            },
            {
                x: 'Saturday',
                y: [
                    new Date(2020, 12, 7, 4).getHours(),
                    new Date(2020, 12, 7, 12).getHours()
                ]
            },
            {
                x: 'Sunday',
                y: [
                    new Date(2020, 12, 8, 4).getHours(),
                    new Date(2020, 12, 8, 12).getHours()
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
