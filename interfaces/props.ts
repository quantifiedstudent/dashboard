import {dataSeries, seriesData} from "./data";

export interface InfoTabProps {
    title: string;
    time: number;
    unit: string;
}

export interface LineGraphProps {
    title: string;
    series: dataSeries[]
    moments: any[],
    className: string
}

export interface TimeLineProps {
    title: string;
    series: seriesData[];
    className: string;
}
