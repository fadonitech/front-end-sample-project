import Head from 'next/head'
import Header from '../components/HomePage/Header';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Head>

      </Head>
      <body>
        <Navbar />
        <Header/>
      </body>
    </div>
  )
}

export default Home;
