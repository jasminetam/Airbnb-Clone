import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AirCloneNClone</title>
        <meta name="description" content="Airbnb Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hi Welcome to AirCloneNClone</h1>
    </div>
  );
};

export default Home;
