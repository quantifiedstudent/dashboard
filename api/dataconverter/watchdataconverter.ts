import {ApiDataPoint, ApiWatchData, DataSeries, LineGraphData, WatchData} from "../../interfaces/data";
import moment from "moment";

function CreateSeries(data: WatchData) : DataSeries{
    let series: DataSeries = {name:'', data: []};series.name = data.name;
    data.datapoints.map((datapoint: { value: number, timestamp: string }) => {
        series.data.push(datapoint.value)
    })
    return series;
}

function CreateMoments(data: ApiDataPoint[]): string[] {
    let moments: string[] = [];
    data.map((datapoint: ApiDataPoint) => {
        moments.push(moment.unix(datapoint.timestamp).format("MM/DD/YYYY"));
    });
    return moments;
}

export default function CreateWatchData(data: ApiWatchData): LineGraphData {
    let exportData: LineGraphData = {title: '', series: [], moments: []};

    exportData.title = data.WatchData.HeartRateData.name + ' compared to ' + data.WatchData.StressData.name;
    exportData.moments = CreateMoments(data.WatchData.HeartRateData.datapoints);
    exportData.series.push(CreateSeries(data.WatchData.HeartRateData));
    exportData.series.push(CreateSeries(data.WatchData.StressData));

    return exportData;
}
