import {useEffect, useState} from "react";
import styles from "../Global.module.css";
import {getWatchDataKeys} from "../../../statemanagement/global/global.selectors";
import {connect} from "react-redux";
import {GraphProps} from "../../../interfaces/props";
import {dataKey} from "../../../interfaces/data";
import CheckboxButtons from "../CheckboxButton/CheckboxButtons";
import Chart from "react-apexcharts";

const options = {
    chart: {
        id: "basic-bar"
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
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

function TimeGraph(props: GraphProps) {
    const [dataKeys, setDataKeys] = useState<dataKey[]>([]);

    useEffect(() => {
        setDataKeys(props.dataKeys)
    }, [props]);

    return <div className={styles.bigGraphWrapper}>
        <CheckboxButtons dataKeys={dataKeys}/>
        <Chart
            options={options}
            series={series}
            type="line"
            width="500"
        />
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        dataKeys: getWatchDataKeys(state)
    };
};

export default connect(mapStateToProps)(TimeGraph);
