import {NextPage} from "next";
import styles from "../../styles/Global.module.css";
import Head from "next/head";

const Canvas: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>QS Dashboard</title>
                <meta name="description" content="Quantified Student Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Canvas
                </h1>
            </main>

        </div>
    )
}

export default Canvas;
