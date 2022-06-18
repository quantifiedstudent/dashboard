import styles from './Infotab.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {InfoTabProps} from "../../../interfaces/props";

export default function InfoTab(props: InfoTabProps) {

    return <div className={styles.container}>
        <h2>{props.title}</h2>
        <div className={styles.timeInfo}>
            <ArrowForwardIosIcon/>
            <div>{props.time}{props.unit}</div>
        </div>
    </div>
}
