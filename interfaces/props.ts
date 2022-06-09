import {dataKey, dataPoint} from "./data";

export interface CheckboxButtonProps {
    name: string;
    selected: boolean;
    setSelected: Function;
}

export interface CheckboxButtonContainerProps {
    dataKeys: dataKey[];
    dispatch: Function;
}

export interface GraphProps {
    datapoints: dataPoint[];
    dataKeys: any[];
}
