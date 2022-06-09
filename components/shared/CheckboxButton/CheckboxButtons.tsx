import styles from './CheckboxButton.module.css';
import {setWatchDataKeys} from "../../../statemanagement/global/global.actions";
import {connect} from "react-redux";
import {getWatchDataKeys} from "../../../statemanagement/global/global.selectors";
import {useEffect, useState} from "react";
import {CheckboxButtonContainerProps} from "../../../interfaces/props";

function CheckboxButtons(props: CheckboxButtonContainerProps) {
    const [dataKeys, setDataKeys] = useState(props.dataKeys);

    const setSelected = (name: string) => {
        for (let i = 0; i < dataKeys.length; i++) {
            if (dataKeys[i].name === name) {
                dataKeys[i].selected = !dataKeys[i].selected
            }
        }
        props.dispatch(setWatchDataKeys(dataKeys));
        setDataKeys([...dataKeys])
    }

    useEffect(() => {
        setDataKeys(props.dataKeys);
    }, [dataKeys, props])

    return <div className={styles.container}>
        {dataKeys.map(key =>
            <button key={key.name}
                    onClick={() => setSelected(key.name)}
                    className={key.selected ? styles.buttonSelected : styles.button}>
                {key.name}
            </button>)}
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        dataKeys: getWatchDataKeys(state)
    };
};
export default connect(mapStateToProps)(CheckboxButtons);
