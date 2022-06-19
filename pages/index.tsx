import {Button, TextField} from '@mui/material'
import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Global.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>QS Dashboard</title>
                <meta name="description" content="Quantified Student Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to QS
                </h1>
                <div className={styles.loginContainer}>
                    <TextField fullWidth label="Fill in your token" variant="outlined"/>
                    <Button fullWidth sx={{color: '#0374b5'}} variant="outlined">Log In</Button>
                </div>
            </div>
        </div>
    )
}

export default Home
