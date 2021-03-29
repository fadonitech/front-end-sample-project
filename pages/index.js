import { createContext } from 'react';
import Head from 'next/head'

import data from '../data/data';
import HomePage from '../components/HomePage/Homepage';
import Footer from '../components/Footer/Footer';

export const ArticlesContext = createContext({});

const Home = () => (
  <div>
    <Head>
      <title>FadoniTech</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content="Fast, reliable, and flexible software solution service for your businesses and project" />
      {/* <meta http-equiv="refresh" content={`5;url="https://www.fadonitech.com/`} /> */}
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <main>
      <ArticlesContext.Provider value={data.articles}>
        <HomePage />
      </ArticlesContext.Provider>
    </main>
    <Footer />
  </div>
)

// export async function getStaticProps() {
//   const req = await fetch("http://localhost:3000/data/articles.json");
//   const data = await req.json();

//   return {
//     props: {
//       ...data
//     }
//   }
// }

export default Home;
