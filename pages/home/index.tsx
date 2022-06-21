import {NextPage} from "next";
import styles from "../../styles/Global.module.css";
import Welcome from "../../components/home/welcome";
import InfoTab from "../../components/home/infotab";
import PerformanceGraph from "../../components/home/performancegraph";
import CanvasInfo from "../../components/home/canvasinfo";
import {Grid} from "@mui/material";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.gridContainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Welcome/>
                        </Grid>

                        <Grid item xs={12}>
                            <PerformanceGraph/>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.gridContainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CanvasInfo/>
                        </Grid>
                    </Grid>
                    <div className={styles.gridContainer}>
                        <InfoTab title={"Average Screen Time"} time={2.45} unit={'h'}/>
                        <InfoTab title={"Average Heart Rate"} time={86} unit={'BPM'}/>
                        <InfoTab title={"Average Sleep Time"} time={7.45} unit={'h'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
