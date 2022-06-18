import {dataPoint} from "./data";

export interface GraphProps {
    datapoints: dataPoint[];
    dataKeys: any[];
}

export interface InfoTabProps {
    title: string;
    time: number;
    unit: string;
}
