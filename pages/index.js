import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/HomePage/Header';
import Credibility from '../components/HomePage/Credibility';
import SubscriptionPlan from '../components/HomePage/SubscriptionPlan';
import Benefits from '../components/HomePage/Benefits';

const Home = () => {
  return (
    <div>
      <Head>

      </Head>
      <body>
        <Navbar />
        <Header />
        <Credibility />
        <SubscriptionPlan />
        <Benefits />
      </body>
    </div>
  )
}

export default Home;
