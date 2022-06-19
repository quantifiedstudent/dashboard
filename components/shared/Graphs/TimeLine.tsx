import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import moment from "moment";
import {TimeLineProps} from "../../../interfaces/props";

export default function TimeLine(props: TimeLineProps) {

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
            text: props.title
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

    return <div className={props.className}>
        <Chart
            options={options}
            series={props.series}
            type="rangeBar"
            height="400"
        />
    </div>
}
