import {Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';


export interface TimeGraphProps {
    datapoints: { timestamp: string, bpm: number, stress: number }[];
}

function TimeGraph(props: TimeGraphProps) {

    return <div style={{marginTop: '200px'}}>
        <LineChart width={1000} height={300} data={props.datapoints}>
            <Line type="monotone" dataKey="bpm" stroke="#8884d8"/>
            <Line type="monotone" dataKey="stress" stroke="#82ca9d"/>
            <XAxis dataKey="timestamp"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
        </LineChart>
    </div>
}

export default TimeGraph;
