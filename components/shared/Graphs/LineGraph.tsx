import {useEffect, useState} from "react";
import styles from "../Shared.module.css";
import {getWatchDataKeys} from "../../../statemanagement/global/global.selectors";
import {connect} from "react-redux";
import {GraphProps} from "../../../interfaces/props";
import {dataKey} from "../../../interfaces/data";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

const options: ApexOptions = {
    chart: {
        id: "basic-line",
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
            new Date('2019-02-28').getTime(),
            new Date('2019-03-01').getTime(),
            new Date('2019-03-02').getTime(),
            new Date('2019-03-03').getTime(),
            new Date('2019-03-04').getTime(),
            new Date('2019-03-05').getTime(),
            new Date('2019-03-06').getTime(),
            new Date('2019-03-07').getTime(),
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

function LineGraph(props: GraphProps) {
    const [dataKeys, setDataKeys] = useState<dataKey[]>([]);

    useEffect(() => {
        setDataKeys(props.dataKeys)
    }, [props]);

    return <div className={styles.bigGraphWrapper}>
        <Chart
            options={options}
            series={series}
            type="line"
            width="1000"
            height="400"
        />
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        dataKeys: getWatchDataKeys(state)
    };
};

export default connect(mapStateToProps)(LineGraph);
