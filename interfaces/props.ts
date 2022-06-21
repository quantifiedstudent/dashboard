import {DataSeries, SeriesData} from "./data";

export interface InfoTabProps {
    title: string;
    time: number;
    unit: string;
}

export interface LineGraphProps {
    title: string;
    series: DataSeries[]
    moments: any[],
    className: string
}

export interface TimeLineProps {
    title: string;
    series: SeriesData[];
    className: string;
}
