import {Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CheckboxButtonContainer from "../CheckboxButton/CheckboxButtonContainer";
import {useEffect, useState} from "react";
import styles from "../Global.module.css";
import {getWatchDataKeys} from "../../../statemanagement/global/global.selectors";
import {connect} from "react-redux";

export interface MixedGraphProps {
    datapoints: { timestamp: string, bpm: number, stress: number }[];
    dataKeys: any[];
}

function MixedGraph(props: MixedGraphProps) {
    const [dataKeys, setDataKeys] = useState([{}]);

    useEffect(() => {
        setDataKeys(props.dataKeys)
    }, [props]);

    return <div className={styles.bigGraphWrapper}>
        <CheckboxButtonContainer dataKeys={props.dataKeys}/>
        <ResponsiveContainer height={300}>
            <ComposedChart data={props.datapoints}>
                <XAxis dataKey="timestamp"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <CartesianGrid stroke="#f5f5f5"/>
                <Bar dataKey="bpm" barSize={20} fill="#0374b5"/>
                <Line type="monotone" dataKey="stress" stroke="#663366"/>
            </ComposedChart>
        </ResponsiveContainer>
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        dataKeys: getWatchDataKeys(state)
    };
};

export default connect(mapStateToProps)(MixedGraph);
