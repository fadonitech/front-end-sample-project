import Head from 'next/head'
import Header from '../components/HomePage/Header';
import Credibility from '../components/HomePage/Credibility';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Head>

      </Head>
      <body>
        <Navbar />
        <Header />
        <Credibility />
      </body>
    </div>
  )
}

export default Home;
