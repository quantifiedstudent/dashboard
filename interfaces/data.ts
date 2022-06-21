export interface DataSeries {
    name: string,
    data: any[],
}

export interface DataPoint {
    x: string,
    y: any[]
}

export interface LineGraphData {
    title: string;
    series: DataSeries[]
    moments: any[],
}
export interface SeriesData {
    data: DataPoint[]
}

