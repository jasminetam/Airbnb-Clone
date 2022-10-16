import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import ExploreCard from '../components/ExploreCard';
import Header from '../components/Header';

const Home: NextPage = ({ exploreData }: any) => {
  return (
    <div>
      <Head>
        <title>AirCloneNClone</title>
        <meta name="description" content="Airbnb Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="main">
        <section className="pt-6">
          <h2 className="firstSection-title">Explore Nearby</h2>
          <div className="firstSection-grid">
            {exploreData.map((item: any) => (
              <ExploreCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
}

export default Home;
