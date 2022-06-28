import {DataSeries, LineGraphData, SeriesData} from "./data";

export interface InfoTabProps {
    title: string;
    time: number;
    unit: string;
}

export interface LineGraphProps {
    lineGraphData: LineGraphData,
    className: string
}

export interface TimeLineProps {
    title: string;
    series: SeriesData[];
    className: string;
}
