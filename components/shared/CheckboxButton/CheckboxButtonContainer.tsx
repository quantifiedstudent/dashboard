import CheckboxButton from "./CheckboxButton";
import styles from './CheckboxButton.module.css';

export interface CheckboxButtonContainerProps {
    buttons: string[];
}

function CheckboxButtonContainer(props: CheckboxButtonContainerProps) {
    return <div className={styles.container}>
        {props.buttons.map(key => <CheckboxButton key={key} name={key}/>)}
    </div>
}

export default CheckboxButtonContainer;
