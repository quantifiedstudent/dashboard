import styles from './CheckboxButton.module.css';

export interface CheckboxButtonProps {
    name: string;
    selected: boolean;
    setSelected: Function;
}

function CheckboxButton(props: CheckboxButtonProps) {
    const className = props.selected ? styles.buttonSelected : styles.button;

    return <button onClick={() => props.setSelected(props.name)} className={className}>
        {props.name}
    </button>
}

export default CheckboxButton;
