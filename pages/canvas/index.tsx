import {NextPage} from "next";
import styles from "../../styles/Global.module.css";

const Canvas: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Canvas
                </h1>
            </main>

        </div>
    )
}

export default Canvas;
