import { createContext } from 'react';
import Head from 'next/head'

import data from '../../data/data';

import Navbar from '../../components/Navbar/Navbar';
import BlogNavbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import BlogContent from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';

export const ArticlesContext = createContext({});

const Blog = () => (
  <>
    <Navbar />
    <BlogContent />
  </>
)

const Home = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>FadoniTech | Blog</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        {/* <meta name="robots" content="index, follow" /> */}
        <meta name="description" content="Weekly content about technology and innovation for businesses in different industries!" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        <ArticlesContext.Provider value={data.articles}>
          <Blog />
        </ArticlesContext.Provider>
      </main>
      <Footer />
    </div>
  )
}

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
