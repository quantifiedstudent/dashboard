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

export interface WatchData {
    name: string,
    datapoints: []
}

export interface ApiDataPoint {
    value: number,
    timestamp: number
}

export interface ApiWatchData {
    WatchData: {
        HeartRateData: WatchData,
        StressData: WatchData
    },
}
