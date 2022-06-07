import CheckboxButton from "./CheckboxButton";
import styles from './CheckboxButton.module.css';
import {setWatchDataKeys} from "../../../statemanagement/global/global.actions";
import {connect} from "react-redux";
import {getWatchDataKeys} from "../../../statemanagement/global/global.selectors";

export interface CheckboxButtonContainerProps {
    dataKeys: { name: string, selected: boolean }[];
    dispatch: Function;
}


function CheckboxButtonContainer(props: CheckboxButtonContainerProps) {

    const setSelected = (name: string) => {
        let currentDataKeys = props.dataKeys;
        console.log('pop')
        console.log(currentDataKeys)
        let dataKey = currentDataKeys.find(key => key.name === name);
        if (dataKey !== undefined) {
            console.log(dataKey)
            dataKey.selected = !dataKey.selected;
            let newDataKeys = currentDataKeys.filter(x => {
                return x.name === name
            });
            newDataKeys.push(dataKey);
            props.dispatch(setWatchDataKeys(newDataKeys));
        }
    }

    return <div className={styles.container}>
        {props.dataKeys.map(key => <CheckboxButton setSelected={setSelected} selected={key.selected} key={key.name}
                                                   name={key.name}/>)}
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        dataKeys: getWatchDataKeys(state)
    };
};
export default connect(mapStateToProps)(CheckboxButtonContainer);
