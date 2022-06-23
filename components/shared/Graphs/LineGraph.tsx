import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import {LineGraphProps} from "../../../interfaces/props";
import moment from "moment";

function LineGraph(props: LineGraphProps) {

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
            text: props.lineGraphData.title,
            align: 'left'
        },
        xaxis: {
            categories: props.lineGraphData.moments,
            type: 'datetime'
        },
        tooltip: {
            x: {
                formatter: (val) => moment(new Date(val)).format('MMM'),
                title: {
                    formatter: (seriesName: string) => seriesName,
                }
            }
        }
    }

    return <div className={props.className}>
        <Chart
            options={options}
            series={props.lineGraphData.series}
            type="line"
            height="400"
        />
    </div>
}

export default LineGraph;
