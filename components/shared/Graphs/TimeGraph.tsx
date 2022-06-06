import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {useState} from "react";
import CheckboxButtonContainer from "../CheckboxButton/CheckboxButtonContainer";

export interface TimeGraphProps {
    datapoints: { timestamp: string, bpm: number, stress: number }[];
}

function TimeGraph(props: TimeGraphProps) {

    const [dataKeys, setDataKeys] = useState(['bpm', 'stress', 'sleep', 'datakey', 'datakey']);

    return <div>
        <CheckboxButtonContainer buttons={dataKeys}/>
        <ResponsiveContainer width={"50%"} height={300}>
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

export default TimeGraph;