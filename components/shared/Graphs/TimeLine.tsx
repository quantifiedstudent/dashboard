import styles from "../Shared.module.css";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import moment from "moment";

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
                x: 'Wednesday',
                y: [
                    new Date(2020, 12, 4, 14).getTime(),
                    new Date(2020, 12, 4, 15).getTime(),
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
        type: 'rangeBar',
        width: '100%',
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    dataLabels: {
        enabled: true,
        formatter: val => {
            return "Test";
        }
    },
    xaxis: {
        type: 'datetime'
    },
    title: {
        text: 'Sleep this week'
    },
    tooltip: {
        x: {
            formatter: (val) => moment(new Date(val)).format('HH:mm'),
            //@ts-ignore
            title: {
                formatter: (seriesName: string) => seriesName,
            }
        }
    }

}
export default function TimeLine() {

    return <div className={styles.bigGraphWrapper}>
        <Chart
            options={options}
            series={series}
            type="rangeBar"
            height="400"
        />
    </div>
}
