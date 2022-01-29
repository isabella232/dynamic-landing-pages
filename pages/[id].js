import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Page({ datasource }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Infobip</title>
        <meta name="description" content="Integrations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Integrate {datasource.channel} in {datasource.platform} with {datasource.language}
        </h1>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:4000/data");
  const pathsources = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = pathsources.map((pathsource) => ({
    params: { id: pathsource.path },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:4000/data/${params.id}`);
  const datasource = await res.json()
  // By returning { props: { data } }, the page component
  // will receive `data` as a prop at build time
  return {
    props: {
      datasource,
    },
  };
}
