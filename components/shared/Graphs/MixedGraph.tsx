import {Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CheckboxButtonContainer from "../CheckboxButton/CheckboxButtonContainer";
import {useState} from "react";

export interface MixedGraphProps {
    datapoints: { timestamp: string, bpm: number, stress: number }[];
}

function MixedGraph(props: MixedGraphProps) {
    const [dataKeys, setDataKeys] = useState(['bpm', 'stress', 'sleep', 'datakey', 'datakey']);

    return <div>
        <CheckboxButtonContainer buttons={dataKeys}/>
        <ResponsiveContainer width={"50%"} height={300}>
            <ComposedChart width={730} height={250} data={props.datapoints}>
                <XAxis dataKey="name"/>
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

export default MixedGraph;
