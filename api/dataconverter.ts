import {DataSeries, LineGraphData} from "../interfaces/data";
import moment from "moment";

export function CreateSeries(data: any) : DataSeries{
    let series: DataSeries = {name:'', data: []};series.name = data.name;
    data.datapoints.map((datapoint: { value: number, timestamp: string }) => {
        series.data.push(datapoint.value)
    })
    return series;
}

export function CreateMoments(data: any): any[] {
    let moments: any[] = [];
    data.map((datapoint: { value: number, timestamp: number }) => {
        moments.push(moment.unix(datapoint.timestamp).format("MM/DD/YYYY"));
    });
    return moments;
}

export function CreateWatchData(data: any): LineGraphData {
    let exportData: LineGraphData = {title: '', series: [], moments: []};

    exportData.title = data.WatchData.HeartRateData.name + ' compared to ' + data.WatchData.StressData.name;
    exportData.moments = CreateMoments(data.WatchData.HeartRateData.datapoints);
    exportData.series.push(CreateSeries(data.WatchData.HeartRateData));
    exportData.series.push(CreateSeries(data.WatchData.StressData));

    return exportData;
}
