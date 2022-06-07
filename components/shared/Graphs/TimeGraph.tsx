import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {useEffect, useState} from "react";
import CheckboxButtonContainer from "../CheckboxButton/CheckboxButtonContainer";
import styles from "../Global.module.css";
import {getWatchDataKeys} from "../../../statemanagement/global/global.selectors";
import {connect} from "react-redux";


export interface TimeGraphProps {
    datapoints: { timestamp: string, bpm: number, stress: number }[];
    dataKeys: any[];
}

function TimeGraph(props: TimeGraphProps) {

    const [dataKeys, setDataKeys] = useState([{}]);

    useEffect(() => {
        setDataKeys(props.dataKeys)
    }, [props]);

    return <div className={styles.bigGraphWrapper}>
        <CheckboxButtonContainer dataKeys={props.dataKeys}/>
        <ResponsiveContainer height={300}>
            <LineChart data={props.datapoints}>
                <Line type="monotone" dataKey="bpm" stroke="#0374b5"/>
                <Line type="monotone" dataKey="stress" stroke="#663366"/>
                <XAxis dataKey="timestamp"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <CartesianGrid stroke="#f5f5f5"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        dataKeys: getWatchDataKeys(state)
    };
};

export default connect(mapStateToProps)(TimeGraph);
