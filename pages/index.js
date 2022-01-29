import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({datasource}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Infobip</title>
        <meta name="description" content="Integrations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          How to generate more than 5000 static web pages with unique route?
        </h1>
      </main>    
    </div>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:4000/data')
  const datasource = await res.json()
  //console.log(datasource)
  // By returning { props: { data } }, the Home component
  // will receive `data` as a prop at build time
  return {
    props: {
      datasource,
    },
  }
}
