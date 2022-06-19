import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import {LineGraphProps} from "../../../interfaces/props";

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
            text: props.title,
            align: 'left'
        },
        xaxis: {
            categories: props.moments,
            type: 'datetime'
        }
    }

    return <div className={props.className}>
        <Chart
            options={options}
            series={props.series}
            type="line"
            height="400"
        />
    </div>
}

export default LineGraph;
