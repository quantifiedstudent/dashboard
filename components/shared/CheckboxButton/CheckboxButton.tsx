import styles from './CheckboxButton.module.css';
import {useState} from "react";

export interface CheckboxButtonProps {
    name: string;
}

function CheckboxButton(props: CheckboxButtonProps) {
    const [isSelected, setIsSelected] = useState(false);
    const className = isSelected ? styles.buttonSelected : styles.button;

    return <button onClick={() => setIsSelected(!isSelected)} className={className}>
        {props.name}
    </button>
}

export default CheckboxButton;
