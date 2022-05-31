import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
          <Head>
              <title>QS Dashboard</title>
              <meta name="description" content="Quantified Student Dashboard"/>
              <link rel="icon" href="/favicon.ico"/>
          </Head>

          <main className={styles.main}>
              <h1 className={styles.title}>
                  Welcome to QS
              </h1>
          </main>

      </div>
  )
}

export default Home
